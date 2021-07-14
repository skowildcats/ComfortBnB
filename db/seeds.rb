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

image_url = ["https://images.unsplash.com/photo-1487695652027-48e475bfa86f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y296eSUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y296eSUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvenklMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdXNlJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvenklMjBob3VzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1501685532562-aa6846b14a0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tZm9ydCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D &ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1511554871707-cb50b6ea37e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29tZm9ydCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1619992518071-8645fd575807?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvbWZvcnQlMjBob3VzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1619992525255-3bed3879b0d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvbWZvcnQlMjBob3VzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdXNlJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvbWZvcnQlMjBob3VzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBmdXJuaXR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBmdXJuaXR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2UlMjBmdXJuaXR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1513694203232-719a280e022f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2UlMjBmdXJuaXR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60  ",
"https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2UlMjBmdXJuaXR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBmdXJuaXR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
]

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
  img_arr = image_url.sample(5)
  p = Property.create!(
    description: description,
    lat: rand(40.7495218..40.7642505),
    lng: rand(-73.9979308..-73.9711885),
    max_guests: guests,
    num_bedrooms: bedrooms,
    num_beds: beds,
    num_baths: baths,
    price: rand(50..200),
    image_urls: img_arr,
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


