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
      Rack::Response.new({
        error: error
      }.to_json, 400)
    end

    # 404 Eror - Not Found
    rescue_from ActiveRecord::RecordNotFound do |e|
      Rack::Response.new({
        error: e.message
      }.to_json, 404)
    end

    # 500 Error - *
    # rescue_from :all do |e|
    #   Rack::Response.new({
    #     error: e.message
    #   }.to_json, 500).finish
    # end
  end
end
