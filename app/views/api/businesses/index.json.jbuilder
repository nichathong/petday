@businesses.each do |biz|
  json.set! biz.id do
    json.partial! 'business', business: biz
  end
  json.photoUrl url_for(biz.photo)
end
