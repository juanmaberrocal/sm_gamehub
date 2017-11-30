# provide class method overrides for grapde_devise_token_auth
# necessary to properly handle passing back token headers
# for batch requests
GrapeDeviseTokenAuth::AuthHeaders.class_eval do
  private

  def auth_headers_from_resource
    # should not append auth header if resource related token was
    # cleared by sign out in the meantime
    # from devise #=> #update_auth_header:94
    return {} if resource.reload.tokens[client_id].nil?

    # determien auth headers
    # and return proper tokens
    auth_headers = {}
    resource.with_lock do
      auth_headers = determine_auth_headers
    end
    auth_headers
  end

  # check if header has to be
  # created|updated|left the same
  # depending on the type of request
  def determine_auth_headers
    if !GrapeDeviseTokenAuth.change_headers_on_each_request
      resource.extend_batch_buffer(token, client_id)
    elsif batch_request?
      resource.build_auth_header(token, client_id)
    else
      resource.create_new_auth_token(client_id)
    end
  end
end
