# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Property.delete_all
Review.delete_all
Reservation.delete_all
User.delete_all

descriptions = ["Unique Spacious Studio Loft in Lakeview", "Bridgeport 3F Renovated 2bed/1bath Apt. MONTHLY", "Cozy Studio Apartment",
"2F Location! Steps from South Loop 1bed/1bath Apt.", "MedDistrict Spacious Renovated 1br Apt MONTHLY"]

user = User.create!(username: test, password: test, fname: test, lname: test, email: test)

descriptions.each do |description|
  guests = rand(1..10)
  beds = rand(1..guests)
  bedrooms = rand(1..beds)
  baths = rand(1..bedrooms)
  p = Property.create!(
    description: description,
    lat: 37.775769,
    lng: -122.434960,
    max_guests: guests,
    num_bedrooms: bedrooms,
    num_beds: beds,
    num_baths: baths,
    price: rand(50..200)
  )

  rand(10..20).times do |i|
    Review.create!(
      body: "eh",
      rating: rand(3..5),
      property_id: p.id,
      author_id: 6
    )
  end


  3.times do |i| 
    checkIn = rand(1..20)
    checkOut = rand(checkIn+1..28)
    Reservation.create!(
      num_guests: 3,
      property_id: p.id,
      user_id: user.id,
      checkin_date: DateTime.new(2021,7,checkIn),
      checkout_date: DateTime.new(2021,7,checkOut),
    )
  end

end


