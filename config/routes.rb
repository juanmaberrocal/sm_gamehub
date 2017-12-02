Rails.application.routes.draw do
  # Mount devise authentication routes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount_devise_token_auth_for 'User',
                              at: 'auth'
                              # controllers: {
                              #   registrations: 'devise_override/registrations'
                              # }

  # Main App wrapper
  root to: 'web_app#index', defaults: { format: 'html' }

  # Grape API endpoints
  mount API::Endpoints, at: '/api'

  # Route all html requests to main App
  get '*web_app', to: 'web_app#index'
end
