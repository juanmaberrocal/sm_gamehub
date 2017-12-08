# Middleware in charge of getting the API response
# and converting all the body keys to camelcase
class CamelCaseResponse < Grape::Middleware::Base
  def after
    # skip middleware if no app response available
    return unless @app_response.present?

    # camelize response body
    camelize_response(response)
  end

  private

  def split_response(response)
    if response.is_a?(Rack::Response)
      [response.status, response.headers, response.body]
    elsif response.is_a?(Array)
      [response[0], response[1], response[2]]
    end
  end

  def camelize_response(response)
    # split the original app_response
    status, headers, body = split_response(response)

    # modify the original body
    # to ensure keys are camelcased
    body = camelize_body(body)
    body.map! { |b| ActiveSupport::JSON.encode(b) }

    # recalculate content length header of camelcased response
    headers['Content-Length'] = body.join.size

    # return array of response parts
    # (original status and header)
    Rack::Response.new(body, status, headers)
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
    Rack::Body.new(camelize_response(body))
  end
end
