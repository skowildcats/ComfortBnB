# == Schema Information
#
# Table name: properties
#
#  id           :bigint           not null, primary key
#  description  :string           not null
#  lat          :float
#  lng          :float
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  max_guests   :integer          not null
#  num_bedrooms :integer          not null
#  num_beds     :integer          not null
#  num_baths    :integer          not null
#  price        :integer          not null
#
class Property < ApplicationRecord 
  validates :description, :lat, :lng, :max_guests, :num_bedrooms, :num_beds, :num_baths, :price, presence: true


  has_many :reviews,
    primary_key: :id,
    foreign_key: :property_id,
    class_name: :Review

  has_many :reservations,
    primary_key: :id,
    foreign_key: :property_id,
    class_name: :Reservation

  def average_rating
    reviews.average(:rating)
  end

  def review_count
    reviews.count(:rating)
  end
end
