# Parser for grape json requests
# Gets request object and transforms to JSON
# Deep transforms all json keys to snake_case
# Modified from action_dispatch/http/parameters.rb
module RablerParams
  def self.call(object, _env)
    data = ActiveSupport::JSON.decode(object)
    data = { _json: data } unless data.is_a?(Hash)

    # Transform camelCase param keys to snake_case
    data.deep_transform_keys!(&:underscore)
  end
end
