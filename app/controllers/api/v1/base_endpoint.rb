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

        # Make the authentication required for any of these API
        # this might have to change later when public enpoints are moved to grape API structure
        # before do
          # header 'commit', SmConfiguration::Accessor.version.try(:to_s)
          # header 'version-timestamp', SmConfiguration::Accessor.js_timestamp.try(:to_s)

          # if self.namespace == "/integration"
          #   # Integration APIs will have a different auth schema, for now it's a simple secret token but in the future will be something better
          #   unauthorized  unless self.headers["Integrationtoken"] == Rails.configuration.integration_token
          # else
          #   unauthorized  unless current_user || options[:route_options][:skip_authentication]
          # end

          # # audit
          # ::PaperTrail.whodunnit = current_user.to_s(current_organization.id) if current_user && current_organization
        # end

        helpers do

          # def action_parameters
          #   @parameters ||= ActionController::Parameters.new(params)
          #   @parameters
          # end

          # def current_user
          #   @current_user = request.env['account']
          #   @current_user
          # end

          def bad_request (error_msg = 'Bad Request')
            error!({ success: false, error_code: 400, error_msg: error_msg }, 400)
          end

          def unauthorized (error_msg = 'Unauthorized')
            error!({ success: false, error_code: 401, error_msg: error_msg }, 401)
          end

          def forbidden (error_msg = 'Forbidden')
            error!({ success: false, error_code: 403, error_msg: error_msg }, 403)
          end

          def unprocessable_entity (model, error_msg = '')
            message = error_msg.present? ? error_msg : model.errors
            error!({errorCode: "Validation Error", errorDescription: message}, 422)
          end

          def unprocessable_entity_custom_message (error_msg)
            error!({errorCode: "Validation Error", errorDescription: error_msg}, 422)
          end

          def entity_not_found (error_msg = 'Not Found')
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
