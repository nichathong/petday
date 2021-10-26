json.partial! '/api/businesses/business', business: @business
json.reviews do 
        json.array! @business.reviews do |review|
            json.extract! review, :message, :rating, :id
        end
    end
json.photoUrls @business.photo.map {|photo| url_for(photo)}
