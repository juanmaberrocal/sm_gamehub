module API
  module V1
    class Users < Grape::API
      include API::V1::BaseEndpoint

      # helpers do
      # end

      resource :users do
        get '' do
          User.all
        end
      end


    end
  end
end
