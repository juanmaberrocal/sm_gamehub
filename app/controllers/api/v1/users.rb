def rabl_path(path)
  rabl_root("users/#{path}")
end

module API
  module V1
    class Users < Grape::API
      include API::V1::BaseEndpoint

      helpers do
        def fetch_record
          @user = User.find(1)
        end
      end

      resource :users do
        get '', rabl: rabl_path('index') do
          User.all
        end

        params do
          requires :id, type: Integer, desc: 'User ID'
        end
        get '/register/:id' do
          fetch_record
          @user
        end
      end
    end
  end
end
