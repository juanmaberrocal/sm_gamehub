module API
  class Endpoints < Grape::API
    %w[
      Games
    ].each do |api|
      mount "API::Public::#{api}".constantize => '/public'
    end

    %w[
      Users
    ].each do |api|
      mount "API::V1::#{api}".constantize => '/v1'
    end
  end
end
