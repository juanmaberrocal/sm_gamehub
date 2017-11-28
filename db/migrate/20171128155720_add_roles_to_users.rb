class AddRolesToUsers < ActiveRecord::Migration[5.1]
  def up
    return if column_exists?(:users, :role_id)
    add_reference(:users, :role, foreign_key: true, after: :email)
  end

  def down
    return unless column_exists?(:users, :role_id)
    remove_column(:users, :role_id)
  end
end
