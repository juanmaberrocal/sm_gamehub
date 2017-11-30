class AddDeletedAtColumnToUsers < ActiveRecord::Migration[5.1]
  def up
    return if column_exists?(:users, :deleted_at)
    add_column :users, :deleted_at, :datetime, after: :updated_at
  end

  def down
    return unless column_exists?(:users, :deleted_at)
    remove_column :users, :deleted_at
  end
end
