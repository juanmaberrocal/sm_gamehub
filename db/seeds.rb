# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create default roles
Role::ROLE_NAMES.each do |_, role_name|
  Role.find_or_create_by!(name: role_name)
end

# Create initial list of games
[
  { name: 'Fifa 17', category: 'sports', sub_category: 'soccer' },
  { name: 'Rocket League', category: 'arcade', sub_category: nil },
  { name: 'Mortal Kombat', category: 'fighting', sub_category: 'combat' },
  { name: 'Worms Battleground', category: 'arcade', sub_category: 'platform' },
  { name: 'Starwhals', category: 'arcade', sub_category: 'retro' }
].each do |game_attrs|
  Game.find_or_create_by!(game_attrs)
end
