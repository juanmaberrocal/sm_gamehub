class AddSlackHandleToUsers < ActiveRecord::Migration[5.1]
  def up
    return if column_exists?(:users, :slack_handle)
    add_column(:users, :slack_handle, :string, after: :email)
  end

  def down
    return unless column_exists?(:users, :slack_handle)
    remove_column(:users, :slack_handle)
  end
end
