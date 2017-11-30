module API
  module V1
    module BaseEndpoint
      extend ActiveSupport::Concern

      included do
        format :json
        formatter :json, Grape::Formatter::Rabl

        auth :grape_devise_token_auth, resource_class: :user
        helpers GrapeDeviseTokenAuth::AuthHelpers

        before do
          authenticate_user!
        end

        helpers do
          def bad_request(error_msg = 'Bad Request')
            error!({ success: false, error_code: 400, error_msg: error_msg }, 400)
          end

          def unauthorized(error_msg = 'Unauthorized')
            error!({ success: false, error_code: 401, error_msg: error_msg }, 401)
          end

          def forbidden(error_msg = 'Forbidden')
            error!({ success: false, error_code: 403, error_msg: error_msg }, 403)
          end

          def unprocessable_entity(model, error_msg = '')
            message = error_msg.present? ? error_msg : model.errors
            error!({ success: false, error_code: 422, error_msg: message }, 422)
          end

          def entity_not_found(error_msg = 'Not Found')
            error!({ success: false, error_code: 404, error_msg: error_msg }, 404)
          end

          def success_empty
            body false
            status 204
          end

          def accepted
            body false
            status 202
          end
        end

        # global handler for params validation errors
        rescue_from Grape::Exceptions::ValidationErrors do |e|
          Rack::Response.new({
            success: false,
            error_code: 400,
            error_msg: e.errors
          }.to_json, 400)
        end

        # 404 Handler
        rescue_from ActiveRecord::RecordNotFound do |e|
          Rack::Response.new({
            success: false,
            error_code: 404,
            error_msg: ErrorString.api.record_not_found
          }.to_json, 404).finish
        end

        # 500 Error response handler
        # rescue_from :all do |e|
        #   Rack::Response.new({
        #     success: false,
        #     error_code: 500,
        #     error_msg: e.message
        #   }.to_json, 500).finish
        # end
      end
    end
  end
end
