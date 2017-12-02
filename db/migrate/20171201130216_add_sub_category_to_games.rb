class AddSubCategoryToGames < ActiveRecord::Migration[5.1]
  def up
    return if column_exists?(:games, :sub_category)
    add_column :games, :sub_category, :string, after: :category
  end

  def down
    return unless column_exists?(:games, :sub_category)
    remove_column :games, :sub_category
  end
end
