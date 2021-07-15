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

descriptions = ["Unique Studio Loft in ", "Cozy Condominium in ", "Spacious Hideaway Apartment in ",
"Elegant Art Deco Home in ", "Romantic High Rise Penthouse in ", "Sundrenched Apartment in ", "Modern and Charming Studio in ", "Luxury Flat in "]

locations = {"New York" => ["East Village", "Lower Manhattan", "Chelsea", "SOHO", "Tribeca", "Garment District", "Upper East Side", "Greenwich Village", "Murray Hill", "Lower East Side", "Little Italy", "West Village"],
"Chicago" => ["River North", "Gold Coast", "Old Town", "Streeterville", "West Loop", "South Loop", "Lincoln Park", "Wicker Park", "Noble Square", "Bucktown", "East Loop"],
"San Francisco" =>["Mission Bay", "Downtown San Francsco", "Alamo Square", "Pacific Heights", "Marina", "Financial District", "North Waterfront", "Potrero Hill", "Hayes Valley", "Noe Valley", "Twin Peaks", "Forest Hills"],
"Los Angeles" => ["Venice", "Santa Monica", "Pacific Palisades", "Brentwood", "Bel-Air", "Beverly Hills", "Playa Vista", "Hollywood", "Beverly Crest", "Studio City", "Hollywood", "Westwood"]}

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
"https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdXNlJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1560185008-186576e0f1e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGhvdXNlJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1560184897-6cdec21b9962?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGhvdXNlJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1560184897-502a475f7a0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHxob3VzZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1560449752-8b6023e2ab5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGhvdXNlJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxob3VzZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxob3VzZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1606136979518-d6fdea0cf4c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxob3VzZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxob3VzZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1560185893-d9680d601385?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxob3VzZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1606202598125-e2077bb5ebcc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxob3VzZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1604238753952-9b7cb3895e08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxob3VzZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1505692952047-1a78307da8f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxob3VzZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1560184897-cca79b749615?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxob3VzZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1600210492493-0946911123ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1615529182904-14819c35db37?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGl2aW5nJTIwcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1618221710640-c0eaaa2adb49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxpdmluZyUyMHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpdmluZyUyMHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxpdmluZyUyMHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1613545325268-9265e1609167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGxpdmluZyUyMHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1556911220-bff31c812dba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1598546720078-8659863bc47d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1550223026-0d6fd780c560?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGtpdGNoZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGtpdGNoZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpdGNoZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1574739782594-db4ead022697?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGtpdGNoZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1591189863345-9db058f9f8ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGtpdGNoZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1543503103-f94a0036ed9d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGtpdGNoZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1598546722530-8d613c406114?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGtpdGNoZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1556909172-54557c7e4fb7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGtpdGNoZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGtpdGNoZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1564540583246-934409427776?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmF0aHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmF0aHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1552454799-ca5cfdc612c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1564540579594-0930edb6de43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1595515769499-0f61fc8db2e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1609946860441-a51ffcf22208?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1600488999585-e4364713b90a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGJhdGhyb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
]

user = User.create!(username: "test", password: "test", fname: "test", lname: "test", email: "test")
user2 = User.create!(username: "jc", password: "jc", fname: "jc", lname: "jc", email: "jc")

mapSeed = {"New York" => {:lat => (40.7495218..40.7642505), :lng => (-73.9979308..-73.9711885)},
"Chicago" => {:lat => (41.8754158..41.8961918), :lng => (-87.6484818..-87.6197498)},
"San Francisco" => {:lat => (37.741232..37.7914978), :lng => (-122.4670407..-122.3912764)},
"Los Angeles" => {:lat => (33.9581022..34.0684897), :lng => (-118.4321643..-118.2148544)}}


reviews = {}

locations.each_with_index do |(city, neighborhood), idx|
  rand(10..15).times do |i|
    guests = rand(1..10)
    beds = rand(1..guests)
    bedrooms = rand(1..beds)
    baths = rand(1..bedrooms)
    img_arr = image_url.sample(5)
    p = Property.create!(
      description: descriptions.sample() + neighborhood.sample(),
      lat: rand(mapSeed[city][:lat]),
      lng: rand(mapSeed[city][:lng]),
      max_guests: guests,
      num_bedrooms: bedrooms,
      num_beds: beds,
      num_baths: baths,
      price: rand(50..200),
      image_urls: img_arr,
      city: city
    )

    rand(10..20).times do |i|
      Review.create!(
        body: "eh",
        rating: rand(3..5),
        property_id: p.id,
        author_id: 6
      )
    end


    rand(0..1).times do |i| 
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
end


