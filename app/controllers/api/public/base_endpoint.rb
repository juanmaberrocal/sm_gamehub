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
          def rabl_root(path)
            "public/#{path}"
          end
        end
      end
    end
  end
end
