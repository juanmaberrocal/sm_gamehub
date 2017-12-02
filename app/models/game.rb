class Game < ActiveRecord::Base
  # Consts
  CATEGORIES = {
    arcade: %w[platform retro],
    fighting: %w[brawler combat simulation],
    sports: %w[basketball baseball football hokey soccer]
  }.freeze

  # Has
  # has_many :users

  # Validations
  validates :category, inclusion: { in: CATEGORIES.keys.map(&:to_s) }
  validates :sub_category,
            inclusion: {
              in: CATEGORIES.map { |_, sub_categories| sub_categories }.flatten
            },
            allow_nil: true

  # Scopes
  scope :active, -> { where(deleted: false) }
end
