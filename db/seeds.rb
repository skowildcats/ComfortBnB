# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Property.delete_all

# def max_guests 
#   rand()
# end

# def max_bed 
#   rand(max_guests)
# end

descriptions = ["Unique Spacious Studio Loft in Lakeview", "Bridgeport 3F Renovated 2bed/1bath Apt. MONTHLY", "Cozy Studio Apartment",
"2F Location! Steps from South Loop 1bed/1bath Apt.", "MedDistrict Spacious Renovated 1br Apt MONTHLY"]


descriptions.each do |description|
  guests = rand(1..10)
  beds = rand(1..guests)
  bedrooms = rand(1..beds)
  baths = rand(1..bedrooms)
  Property.create!(
    description: description,
    lat: 37.775769,
    lng: -122.434960,
    max_guests: guests,
    num_bedrooms: bedrooms,
    num_beds: beds,
    num_baths: baths,
  )
end