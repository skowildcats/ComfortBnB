class Property < ApplicationRecord 
  validates :description, :lat, :lng, :max_guests, :num_bedrooms, :num_beds, :num_baths, presence: true

end