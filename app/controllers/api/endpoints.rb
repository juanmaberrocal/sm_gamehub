module API
  class Endpoints < Grape::API
    %w[
      Users
    ].each do |api|
      mount "API::V1::#{api}".constantize => '/v1'
    end
  end
end
