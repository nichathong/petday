json.partial! '/api/businesses/business', business: @business
json.photoUrls @business.photo.map {|photo| url_for(photo)}
