# Middleware in charge of getting the API response
# and converting all the body keys to camelcase
class CamelCaseResponseMiddleware
  def initialize(app)
    @app = app
  end

  def call(env)
    # split call response
    @status, @headers, @response = @app.call(env)

    # check if handling a json request
    # and camelize response keys
    # (return original response if not)
    json_request? ? camelize_response : [@status, @headers, @response]
  end

  private

  def json_request?
    (
      @headers['Content-Type'] ||
      @headers['content-type']
    ).include?('application/json')
  end

  def response_body
    case @response
    when Array
      @response[2]
    when ActionDispatch::Response::RackBody,
         Rack::BodyProxy
      @response.body
    end
  end

  def encode_body!
    @body =
      case @body
      when String
        @body
      when Array
        @body.map { |body| ActiveSupport::JSON.encode(body) }
      when Hash
        ActiveSupport::JSON.encode(@body)
      end

    # ensure encoded body response is wrapped as an array
    @body = Array(@body)
  end

  def reset_header_length!
    # recalculate content length header of camelcased response
    @headers['Content-Length'] = @body.join.size
  end

  def camelize_response
    # modify the original body
    # to ensure keys are camelcased
    @body = camelize_body(response_body)

    encode_body!
    reset_header_length!

    # return response array
    # (ensure body is returned as an array)
    [@status, @headers, @body]
  end

  def camelize_body(body)
    case body
    when String
      camelize_string(body)
    when Array
      camelize_array(body)
    when Hash
      camelize_hash(body)
    when Rack::BodyProxy
      camelize_proxy(body)
    end
  end

  def camelize_string(body)
    camelize_body(ActiveSupport::JSON.decode(body))
  end

  def camelize_array(body)
    body.map { |b| camelize_body(b) }
  end

  def camelize_hash(body)
    body.deep_transform_keys { |key| key.to_s.camelize(:lower) }
  end

  def camelize_proxy(body)
    Rack::Body.new(Rack::Response.new(camelize_response(body)))
  end
end
