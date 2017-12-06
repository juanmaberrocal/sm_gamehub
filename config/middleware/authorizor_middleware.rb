class AuthorizorMiddleware
  def initialize(app)
    @app = app
  end

  def call(env)
    status, headers, response = @app.call(env)
    [status, headers, response]
  end

  private

  def authorization_headers
  end
end
