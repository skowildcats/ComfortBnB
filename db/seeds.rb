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

descriptions = ["Unique Studio Loft in East Village", "Cozy Condominium in Downtown Manhattan", "Spacious Hideaway Apartment in Chelsea",
"Elegant Art Deco Home in SOHO", "Romantic High Rise Penthouse in Tribeca"]

user = User.create!(username: "test", password: "test", fname: "test", lname: "test", email: "test")
user2 = User.create!(username: "jc", password: "jc", fname: "jc", lname: "jc", email: "jc")

# NY:
# top-left: 40.7642505, -73.9979308
# top-right: 40.7631007, -73.9711885
# bottom-right: 40.7495218, -73.9706277
# bottom-left: 40.7495218, -73.9979308

descriptions.each do |description|
  guests = rand(1..10)
  beds = rand(1..guests)
  bedrooms = rand(1..beds)
  baths = rand(1..bedrooms)
  p = Property.create!(
    description: description,
    lat: rand(40.7495218..40.7642505),
    lng: rand(-73.9979308..-73.9711885),
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


