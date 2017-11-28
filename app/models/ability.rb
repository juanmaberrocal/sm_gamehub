class Ability
  include CanCan::Ability
  include Abilities::SuperAdmin
  include Abilities::Admin
  include Abilities::User

  def initialize(user)
    user ||= User.new
    case user.role?
    when :super_admin
      super_admin_abilities
    when :admin
      admin_abilities
    when :user
      user_abilities
    end
  end
end
