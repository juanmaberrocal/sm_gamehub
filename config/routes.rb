Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Main App wrapper
  root to: 'web_app#index', defaults: { format: 'html' }

  # Grape API endpoints
  mount API::Endpoints, at: '/api'

  # Route all html requests to main App
  get '*web_app', to: 'web_app#index'
end
