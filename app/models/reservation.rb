# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  num_guests    :integer          not null
#  user_id       :integer          not null
#  property_id   :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  checkin_date  :datetime         not null
#  checkout_date :datetime         not null
#
class Reservation < ApplicationRecord
  validates :num_guests, :user_id, :property_id, :checkin_date, :checkout_date, presence: true

  belongs_to :reservee,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User 
  
  belongs_to :property,
    primary_key: :id,
    foreign_key: :property_id,
    class_name: :Property

end
