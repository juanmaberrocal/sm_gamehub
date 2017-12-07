class Ability
  include CanCan::Ability

  def initialize(current_user)
    merge Abilities::UserAbility.new(current_user)
  end
end
