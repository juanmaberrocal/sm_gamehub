# description: build raw rack error response
#              to be used if dependent helper methods not availble
# @error: error string
# @code: error code
# @return: rack error
def rack_response(error, code = 500)
  Rack::Response.new({
    error: error
  }.to_json, code).finish
end

# concern module to rescue errors in grape api
# - build rack errors in standard format
# - dependent on RablerResponder for helper return methods
module RablerErrorHandler
  extend ActiveSupport::Concern

  included do
    # 400 Error - Bad Request
    rescue_from Grape::Exceptions::ValidationErrors do |e|
      error = {}
      e.errors.keys.each do |error_key|
        # error key is wrapped into an array
        # keep the response simple for now as string.
        error[error_key.first] = e.errors[error_key].join(',')
      end

      begin
        bad_request(error)
      rescue
        rack_response(error, 400)
      end
    end

    # 404 Eror - Not Found
    rescue_from ActiveRecord::RecordNotFound do |e|
      begin
        not_found(e.message)
      rescue
        rack_response(e.message, 404)
      end
    end

    # 500 Error - *
    rescue_from :all do |e|
      begin
        server_error(e.message)
      rescue
        rack_response(e.message)
      end
    end
  end
end
