class UseRegisteredTimestampOverBoolean < ActiveRecord::Migration[5.1]
  def up
    return if column_exists?(:users, :registered_at) &&
              !column_exists?(:users, :registration_complete)

    remove_column :users, :registration_complete
    add_column :users, :registered_at, :datetime, after: :deleted_at
  end

  def down
    return if !column_exists?(:users, :registration_complete) &&
              column_exists?(:users, :registered_at)

    remove_column :users, :registered_at
    add_column :users, :registration_complete, :boolean, after: :role_id, default: false
  end
end
