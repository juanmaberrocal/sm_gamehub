class AuthorizationHeaders < Grape::Middleware::Base
  def after
    # debugger

    # headers = @app_response[1] || {}
    # headers.merge!(authorization_headers)
  end

  private

  # def authorization_headers
  #   headers = @env['api.endpoint'].headers

  #   {}.tap do |auth_header|
  #     auth_header['access-token'] = headers['Access-Token']
  #     auth_header['client'] = headers['Client']
  #     auth_header['expiry'] = headers['Expiry']
  #     auth_header['token'] = headers['Token']
  #     auth_header['uid'] = headers['Uid']
  #   end
  # end
end
