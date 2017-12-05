# base concern module for grape rabl responses
# - set rabl format response
# - include rabl standard responses
# - include rabl error rescues
module Rabler
  extend ActiveSupport::Concern
  include RablerResponder
  include RablerErrorHandler

  included do
    format :json
    formatter :json, Grape::Formatter::Rabl
  end
end
