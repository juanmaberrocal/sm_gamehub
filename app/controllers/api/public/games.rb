def rabl_path(path)
  rabl_root("games/#{path}")
end

module API
  module Public
    class Games < Grape::API
      include API::Public::BaseEndpoint

      helpers do
      end

      resource :games do
        get '', rabl: rabl_path('index') do
          @games = Game.active
        end
      end
    end
  end
end
