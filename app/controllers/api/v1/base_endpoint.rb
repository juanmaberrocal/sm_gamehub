def rabl_root(path)
  "v1/#{path}"
end

module API
  module V1
    module BaseEndpoint
      extend ActiveSupport::Concern
      include Rabler
      include Authorizor

      included do
        helpers do
        end
      end
    end
  end
end
