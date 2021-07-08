# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  body        :string           default(""), not null
#  rating      :integer          not null
#  property_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :property,
    primary_key: :id,
    foreign_key: :property_id,
    class_name: :Property
end
