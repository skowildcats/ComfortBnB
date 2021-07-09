json.property do
  json.partial! '/api/properties/property', property: @property

  @property.reviews.each do |review|
    json.reviews do
      json.set! review.id do
        json.partial! 'api/reviews/review', review: review
      end
    end
  end

  json.average_rating @property.average_rating
  json.review_count @property.review_count
end


