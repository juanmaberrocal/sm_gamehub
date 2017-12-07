def rabl_path(path)
  rabl_root("users/#{path}")
end

module API
  module V1
    class Users < Grape::API
      include API::V1::BaseEndpoint

      helpers do
        params :cu_params do
          requires :name, type: String, desc: 'Full Name'
          requires :nickname, type: String, desc: 'Username'
          optional :use_full_name,
                   type: Boolean,
                   desc: 'Flag to display full name'
          optional :slack_handle, type: String, desc: 'Slack handle'
          optional :role_id,
                   type: Integer,
                   values: Role.pluck(:id),
                   desc: 'Role assigned'
        end

        def fetch_record
          @user = User.find(params[:id])
        end

        def declared_params
          declared(params, include_missing: false)
        end
      end

      resource :users do
        desc 'Fetch User records'
        params do
        end
        get '', rabl: rabl_path('index') do
          User.all
        end

        desc 'Update existing User record'
        params do
          requires :id, type: Integer, desc: 'User ID'
          use :cu_params
        end
        put '/:id' do
          fetch_record
          return not_found unless @user.present?
          return unauthorized unless current_user.can?(:manage, @user)
          return unprocessable_entity(@user) unless @user.update_attributes(declared_params)
          @user
        end

        desc 'Stamp existing User record as registered'
        params do
          requires :id, type: Integer, desc: 'User ID'
        end
        post '/:id/register' do
          fetch_record
          return not_found unless @user.present?
          return unauthorized unless current_user.can?(:manage, @user)
          return unprocessable_entity(@user) unless @user.register!
          success_empty
        end
      end
    end
  end
end
