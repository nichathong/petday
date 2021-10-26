@businesses.each do |business|
  json.set! business.id do
    json.partial! 'business' , business: business
    json.photoUrls business.photo.map {|photo| url_for(photo)}
  json.reviews do 
        json.array! business.reviews do |review|
            json.extract! review, :message, :rating, :id
        end
    end  
  end
end