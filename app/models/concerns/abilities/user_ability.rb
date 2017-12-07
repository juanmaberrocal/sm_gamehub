module Abilities
  class UserAbility
    include CanCan::Ability

    def initialize(current_user)
      can :manage, User, id: current_user.id
      can :read, Game
    end
  end
end
