class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable # :confirmable,
  include DeviseTokenAuth::Concerns::User
  include DeviseOverrides::User

  # Belongs
  belongs_to :role

  # Callbacks
  before_validation :default_role, if: proc { |user| user.role_id.blank? }

  # Define CanCan role abilities
  def ability
    @ability ||= Ability.new(self)
  end
  delegate :can?, :cannot?, to: :ability

  # Instance methods
  # description: pull the associated role of the user
  #              and return as a symbol
  # @return: role name symbol
  def role?
    role.name.to_sym
  end

  private

  # description: set the role of a user as the default role
  #              this is defined as the `user` role
  def default_role
    self.role_id = Role.user.id
  end
end
