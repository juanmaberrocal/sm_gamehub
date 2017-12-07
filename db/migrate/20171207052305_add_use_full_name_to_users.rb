class AddUseFullNameToUsers < ActiveRecord::Migration[5.1]
  def up
    return if column_exists?(:users, :use_full_name)
    add_column(:users, :use_full_name, :boolean, default: false, after: :nickname)
  end

  def down
    return unless column_exists?(:users, :use_full_name)
    remove_column(:users, :use_full_name)
  end
end
