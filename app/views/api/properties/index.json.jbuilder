@properties.each do |property|
  json.set! property.id do
    json.partial! 'api/properties/property', property: property
    json.average_rating property.average_rating
    json.review_count property.review_count
  end
end

