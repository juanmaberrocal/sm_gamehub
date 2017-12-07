# base concern module for grape rabl responses
# - parse params to snake case
# - set rabl format response
# - include rabl standard responses
# - include rabl error rescues
module Rabler
  extend ActiveSupport::Concern
  include RablerParams
  include RablerResponder
  include RablerErrorHandler

  included do
    format :json
    parser :json, RablerParams
    formatter :json, Grape::Formatter::Rabl
  end
end
