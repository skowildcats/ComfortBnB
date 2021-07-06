# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Property.delete_all


p1 = Property.create!(
  description: "SF",
  lat: 37.775769,
  lng: -122.434960,
)

p2 = Property.create!(
  description: "CHI",
  lat: 37.779760,
  lng: -122.413820,
)

p3 = Property.create!(
  description: "NY",
  lat: 37.769996,
  lng: -122.511281,
)