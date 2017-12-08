# base concern module for grape rabl responses
# - parse params to snakecase
# - set rabl format response
# - include rabl standard responses
# - include rabl error rescues
# - parse response to camelcase
module Rabler
  extend ActiveSupport::Concern
  include RablerResponder
  include RablerErrorHandler
  include SnakeCaseParams

  included do
    # set default content type to json
    format :json

    # use custom request parser
    # to convert json formatted params
    # to snake_case keys
    parser :json, SnakeCaseParams

    # use rabl formatter for json response
    formatter :json, Grape::Formatter::Rabl

    # add camelize_response middleware
    # to convert rabl formatted response
    # to camel_case keys
    # use CamelCaseResponse
  end
end
