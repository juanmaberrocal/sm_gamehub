module Rabler
  extend ActiveSupport::Concern
  include RablerResponder
  include RablerErrorHandler

  included do
    format :json
    formatter :json, Grape::Formatter::Rabl
  end
end
