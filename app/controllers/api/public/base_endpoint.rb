def rabl_root(path)
  "public/#{path}"
end

module API
  module Public
    module BaseEndpoint
      extend ActiveSupport::Concern
      include Rabler

      included do
        before do
          @public = true
        end

        helpers do
        end
      end
    end
  end
end
