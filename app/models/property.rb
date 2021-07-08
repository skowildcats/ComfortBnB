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
#
class Property < ApplicationRecord 
  validates :description, :lat, :lng, :max_guests, :num_bedrooms, :num_beds, :num_baths, presence: true


  has_many :reviews,
    primary_key: :id,
    foreign_key: :property_id,
    class_name: :Review
end
