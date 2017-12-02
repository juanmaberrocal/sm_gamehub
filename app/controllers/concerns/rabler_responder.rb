module RablerResponder
  extend ActiveSupport::Concern

  included do
    helpers do
      def bad_request(error = 'Bad Request')
        error!({ error: error }, 400)
      end

      def unauthorized(error = 'Unauthorized')
        error!({ error: error }, 401)
      end

      def forbidden(error = 'Forbidden')
        error!({ error: error }, 403)
      end

      def not_found(error = 'Not Found')
        error!({ error: error }, 404)
      end

      def unprocessable_entity(model)
        error = {}
        model.errors.keys.each do |error_key|
          error[error_key] = model.errors[error_key].first
        end
        error!({ error: error }, 422)
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
