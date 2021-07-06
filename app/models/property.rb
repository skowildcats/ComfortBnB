class Property < ApplicationRecord 
  validates :description, :lat, :lng, presence: true

end