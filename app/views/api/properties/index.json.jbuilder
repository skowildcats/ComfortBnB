@properties.each do |property|
  json.set! property.id do
    json.partial! 'api/properties/property', property: property
  end
end

