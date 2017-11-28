class Role < ActiveRecord::Base
  # Consts
  ROLE_NAMES = {
    super_admin: 'super_admin',
    admin: 'admin',
    user: 'user'
  }.freeze

  # Has
  has_many :users

  # Validations
  validates :name, uniqueness: true

  # Scopes
  scope :super_admin, -> { find_by(name: ROLE_NAMES[:super_admin]) }
  scope :admin, -> { find_by(name: ROLE_NAMES[:admin]) }
  scope :user, -> { find_by(name: ROLE_NAMES[:user]) }
end
