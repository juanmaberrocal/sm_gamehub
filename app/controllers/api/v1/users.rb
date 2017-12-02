def rabl_path(path)
  rabl_root("users/#{path}")
end

module API
  module V1
    class Users < Grape::API
      include API::V1::BaseEndpoint

      helpers do
      end

      resource :users do
        get '', rabl: rabl_path('index') do
          User.all
        end
      end
    end
  end
end
