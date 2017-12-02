module Authorizor
  extend ActiveSupport::Concern

  included do
    auth :grape_devise_token_auth, resource_class: :user
    helpers GrapeDeviseTokenAuth::AuthHelpers

    before do
      authenticate_user!
    end
  end
end