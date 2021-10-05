@businesses.each do |business|
  json.set! business.id do
    json.partial! 'business' , business: business
    json.photoUrls business.photo.map {|photo| url_for(photo)}
  end
end