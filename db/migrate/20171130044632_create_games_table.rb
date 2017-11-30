class CreateGamesTable < ActiveRecord::Migration[5.1]
  def up
    return if table_exists?(:games)
    create_table :games do |t|
      t.string :name, null: false
      t.string :category
      t.boolean :deleted
      t.timestamps
    end
  end

  def down
    return unless table_exists?(:games)
    drop_table :games
  end
end
