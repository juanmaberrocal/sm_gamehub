def auth_headers(headers)
  {}.tap do |auth_header|
    auth_header['access-token'] = headers['Access-Token']
    auth_header['client'] = headers['Client']
    auth_header['expiry'] = headers['Expiry']
    auth_header['token'] = headers['Token']
    auth_header['uid'] = headers['Uid']
  end
end

module RablerResponder
  extend ActiveSupport::Concern

  included do
    helpers do
      def bad_request(error = 'Bad Request')
        error!({ error: error }, 400, auth_headers(headers))
      end

      def unauthorized(error = 'Unauthorized')
        error!({ error: error }, 401, auth_headers(headers))
      end

      def forbidden(error = 'Forbidden')
        error!({ error: error }, 403, auth_headers(headers))
      end

      def not_found(error = 'Not Found')
        error!({ error: error }, 404, auth_headers(headers))
      end

      def unprocessable_entity(model)
        error = {}
        model.errors.keys.each do |error_key|
          error[error_key] = model.errors[error_key].first
        end
        error!({ error: error }, 422, auth_headers(headers))
      end

      def accepted
        body false
        status 202
      end

      def success_empty
        body false
        status 204
      end
    end
  end
end
