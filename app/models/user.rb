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

  # Instance methods
  def role?
    role.name.to_sym
  end

  private

  def default_role
    self.role_id = Role.user.id
  end
end
