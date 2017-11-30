class AddRegistrationCompleteToUsers < ActiveRecord::Migration[5.1]
  def up
    return if column_exists?(:users, :registration_complete)
    add_column :users, :registration_complete, :boolean, after: :role_id, default: false
  end

  def down
    return unless column_exists?(:users, :registration_complete)
    remove_column :users, :registration_complete
  end
end
