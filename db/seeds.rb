# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'net/http'

Business.destroy_all
User.destroy_all
Review.destroy_all

# user1 = User.create!(email: "andy@hotmail.com", password: "ilovepasta", zipcode: "94010")
# user2 = User.create!(email: "namfom@gmail.com", password: "ilovetoeat", zipcode: "94010")
# user3 = User.create!(email: "annie@hgmail.com", password: "myheadisexploding", zipcode: "94010")
# user4 = User.create!(email: "mara@gmail.com", password: "ilovemylife", zipcode: "94010")
# user5 = User.create!(email: "veronika@gmail.com", password: "nycpartylife", zipcode: "94010")
# user6 = User.create!(email: "jenny@gmail.com", password: "raspberrychocolate", zipcode: "94010")
user7 = User.create!(firstname: "guest", lastname: "test", email: "guest@gmail.com", password: "1234567", zipcode: "94010", profile_pic: "guest")
user1 = User.create!(
    firstname: "Harry",
    lastname: "Potter",
    email: "harrypotter@aa.com",
    zipcode: "94010",
    password: "harrypotter",
    profile_pic: "harry"

)
user2 = User.create!(
    firstname: "Ronald",
    lastname: "Weasley",
    email: "ronweasley@aa.com",
    zipcode: "91020",
    password: "ronweasley",
    profile_pic: "ron"

)
user3 = User.create!(
    firstname: "Hermione",
    lastname: "Granger",
    email: "hermionegrander@aa.com",
    zipcode: "94124",
    password: "hermionegrandger",
    profile_pic: "hermione"

)

user4 = User.create!(
    firstname: "Albus",
    lastname: "Dumbledore",
    email: "albusdumbledore@aa.com",
    zipcode: "94124",
    password: "albusdumbledore",
    profile_pic: "dumbledore"

)

user5 = User.create!(
    firstname: "Severus",
    lastname: "Snape",
    email: "severussnape@aa.com",
    zipcode: "94010",
    password: "severussnape",
    profile_pic: "snape"

)

user6 = User.create!(
    firstname: "George",
    lastname: "Wesley",
    email: "georgeweasley@aa.com",
    zipcode: "90021",
    password: "georgewesley",
    profile_pic: "george"

)

user8 = User.create!(
    firstname: "Minerva",
    lastname: "McGonagall",
    email: "mmcgalnagall@aa.com",
    zipcode: "94011",
    password: "mcmcgonagall",
    profile_pic: "mcgonagall"
    
    )
    
user9 = User.create!(
    firstname: "Dobby",
    lastname: "Elf",
    email: "dobbyelf@aa.com",
    zipcode: "90020",
    password: "dobbyelf",
    profile_pic: "dobby"
    
    )

user10 = User.create!(
    firstname: "Drago",
    lastname: "Malfoy",
    email: "dragomalfoy@aa.com",
    zipcode: "90020",
    password: "dragomalfoy",
    profile_pic: "drago"
    
    )
            
user11 = User.create!(
    firstname: "Hagrid",
    lastname: "Rubius",
    email: "hagridrubius@aa.com",
    zipcode: "92506",
    password: "hagridrubius",
    profile_pic: "hagrid"

)
    business1 = Business.create!(
    name: "New England Lobster Market & Eatery",
    img_url: "https://s3-media0.fl.yelpcdn.com/bphoto/eIEvQKEdybaW7Xx3ZYRsyw/ls.jpg",
    address: "824 Cowan Rd, Burlingame, California, 94010",
    phone_number: "(650) 443-1559",
    categories: "Seafood Markets, Seafood, Tapas/Small Plates",
    cost: "$$",
    hours: "Mon	10:00 am - 9:00 pm, Tue	10:00 am - 9:00 pm, Wed	10:00 am - 9:00 pm, Thu	10:00 am - 9:00 pm, Fri	10:00 am - 10:00 pm, Sat	9:00 am	- 10:00 pm, Sun	9:00 am	- 9:00 pm",
    lat: "37.60324840042443",
    long: "-122.37481763068352",
    delivery: false,
    takeout: true,
    outdoor: true,
    website: "https://newenglandlobster.net/"

)

file1 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/food1.jpeg')
file2 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/food2.jpeg')
file3 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/food4.jpeg')
file4 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/food5.jpeg')
file5 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/food6.jpeg')

business1.photo.attach(io: file1, filename: 'food1.jpeg')
business1.photo.attach(io: file2, filename: 'food2.jpeg')
business1.photo.attach(io: file3, filename: 'food4.jpeg')
business1.photo.attach(io: file4, filename: 'food5.jpeg')
business1.photo.attach(io: file5, filename: 'food6.jpeg')

review1a = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 5,
    user_id: user1.id,
    business_id: business1.id
)

review1b = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 4,
    user_id: user2.id,
    business_id: business1.id
)

review1c = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 5,
    user_id: user3.id,
    business_id: business1.id
)

review1d = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 4,
    user_id: user4.id,
    business_id: business1.id
)

review1f = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 5,
    user_id: user6.id,
    business_id: business1.id
)

review1e = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 3,
    user_id: user5.id,
    business_id: business1.id
)

business2 = Business.create!(
    name: "Crepevine Restaurants",
    img_url: "https://www.yelp.com/biz/crepevine-restaurants-burlingame-2?osq=Pet+Friendly+Restaurant",
    address: "1310 Burlingame Ave, Burlingame, California, 94010",
    phone_number: "(650) 344-1310",
    categories: "American (New), Breakfast & Brunch, Creperies",
    cost: "$$",
    hours: "Mon	8:00 am	- 9:00 pm, Tue	8:00 am	- 9:00 pm, Wed	8:00 am	- 9:00 pm, Thu	8:00 am	- 9:00 pm, Fri	8:00 am	- 9:00 pm, Sat	8:00 am	- 9:00 pm, Sun	8:00 am	- 9:00 pm",
    lat: "37.57861321893335", 
    long: "-122.34757297374277",
    delivery: false,
    takeout: true,
    outdoor: true,
    website: "https://crepevine.com/locations/burlingame/"
)

file6 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/egg_benedict.jpeg')
file7 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/o.jpeg')
file8 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/spaghetti_meatball.jpeg')
file9 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/waffle.jpeg')

business2.photo.attach(io: file6, filename: 'egg_benedict.jpeg')
business2.photo.attach(io: file7, filename: 'o.jpeg')
business2.photo.attach(io: file8, filename: 'spaghetti_meatball.jpeg')
business2.photo.attach(io: file9, filename: 'waffle.jpeg')

review2a = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 5,
    user_id: user4.id,
    business_id: business2.id
)

review2b = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 3,
    user_id: user5.id,
    business_id: business2.id
)

review2c = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 4,
    user_id: user6.id,
    business_id: business2.id
)

review2d = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 5,
    user_id: user8.id,
    business_id: business2.id
)

review2f = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 2,
    user_id: user9.id,
    business_id: business2.id
)

business3 = Business.create!(
    name: "Maverick Jack's",
    img_url: "https://s3-media0.fl.yelpcdn.com/bphoto/OnHjCuVgckxAgDRre1K7Mw/ls.jpg",
    address: "1190 California Dr, Burlingame, California, 94010",
    phone_number: "(650) 347-3061",
    categories: "American (New), Burger",
    cost: "$$",
    hours: "Mon	11:00 am - 2:00 pm, Mon	5:00 pm	- 8:00 pm, Tue	11:00 am - 2:00 pm, Tue	5:00 pm	- 8:00 pm, Wed	11:00 am - 2:00 pm, Wed	5:00 pm	- 8:00 pm, Thu	11:00 am - 2:00 pm, Thu	5:00 pm	- 8:00 pm, Fri	11:00 am - 2:00 pm, Fri	5:00 pm	- 8:00 pm, Sat	11:00 am - 2:00 pm, Sat	5:00 pm	- 8:00 pm, Sun	11:00 am - 2:00 pm, Sun	5:00 pm	- 8:00 pm",
    lat: "37.587809827081045",
    long: "-122.36289300072987",
    delivery: true,
    takeout: true,
    outdoor: true,
    website: "http://www.maverickjacks.com"

)
file10 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/marverick1.jpeg')
file11 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/marverick2.jpeg')
file12 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/marverick3.jpeg')
file13 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/marverick4.jpeg')
file14 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/marverick5.jpeg')

business3.photo.attach(io: file10, filename: 'marverick1.jpeg')
business3.photo.attach(io: file11, filename: 'marverick2.jpeg')
business3.photo.attach(io: file12, filename: 'marverick3.jpeg')
business3.photo.attach(io: file13, filename: 'marverick4.jpeg')
business3.photo.attach(io: file14, filename: 'marverick5.jpeg')

review3a = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 5,
    user_id: user9.id,
    business_id: business3.id
)

review3b = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 4,
    user_id: user3.id,
    business_id: business3.id
)

review3c = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 5,
    user_id: user9.id,
    business_id: business3.id
)

review3d = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 4,
    user_id: user4.id,
    business_id: business3.id
)

review3f = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 1,
    user_id: user1.id,
    business_id: business3.id
)


business4 = Business.create!(
    name: "Rise Woodfire",
    img_url: "https://s3-media0.fl.yelpcdn.com/bphoto/lHGzQgBq0mI0M6CeTCcJzA/ls.jpg",
    address: "2 N B St, San Mateo, California, 94401",
    phone_number: "(650) 389-6918",
    categories: "Bars, American (Traditional), Pizza",
    cost: "$$",
    hours: "Mon	11:00 am - 9:00 pm, Tue	11:00 am - 9:00 pm, Wed	11:00 am - 9:00 pm, Thu	11:00 am - 9:00 pm, Fri	11:00 am - 10:00 pm, Sat	11:00 am - 10:00 pm, Sun	11:00 am - 9:00 pm",
    lat: "37.568163439635676",
    long: "-122.3240314007304",
    delivery: true,
    takeout: true,
    outdoor: true,
    website: "http://www.risewoodfire.com"

)

file15 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/woodfire1.jpeg')
file16 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/woodfire2.jpeg')
file17 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/woodfire3.jpeg')
file18 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/woodfire4.jpeg')
file19 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/woodfire5.jpeg')

business4.photo.attach(io: file15, filename: 'woodfire1.jpeg')
business4.photo.attach(io: file16, filename: 'woodfire2.jpeg')
business4.photo.attach(io: file17, filename: 'woodfire3.jpeg')
business4.photo.attach(io: file18, filename: 'woodfire4.jpeg')
business4.photo.attach(io: file19, filename: 'woodfire5.jpeg')

review4a = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 5,
    user_id: user8.id,
    business_id: business4.id
)

review4b = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 4,
    user_id: user10.id,
    business_id: business4.id
)

review4c = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 5,
    user_id: user3.id,
    business_id: business4.id
)

review4d = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 4,
    user_id: user4.id,
    business_id: business4.id
)

review4f = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 1,
    user_id: user5.id,
    business_id: business4.id
)


business5 = Business.create!(
    name: "Hula Hoops",
    img_url: "https://s3-media0.fl.yelpcdn.com/bphoto/QTye38JBo9VrCHfW_V9Q2A/ls.jpg",
    address: "2278 Westborough Blvd, Ste 203, South San Francisco, California, 94080",
    phone_number: "(650) 952-3255",
    categories: "Venues & Event Spaces, Asian Fusion, Tiki Bars",
    cost: "$$",
    hours: "Tue	4:00 pm	- 9:00 pm, Wed	4:00 pm	- 9:00 pm, Thu	4:00 pm	- 9:30 pm, Fri	4:00 pm	- 9:30 pm, Sat	10:00 am - 3:00 pm, Sun	10:00 am - 3:00 pm",
    lat: "37.6451097646044", 
    long: "-122.45258191606997",
    delivery: false,
    takeout: true,
    outdoor: true,
    website: "https://www.myhulahoops.com"
    
)

file20 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/hulahoop1.jpeg')
file21 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/hulahoop2.jpeg')
file22 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/hulahoop3.jpeg')
file23 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/hulahoop4.jpeg')
file24 = open('https://petday-seed.s3.us-west-1.amazonaws.com/petday_img/hulahoop5.jpeg')

business5.photo.attach(io: file20, filename: 'hulahoop1.jpeg')
business5.photo.attach(io: file21, filename: 'hulahoop2.jpeg')
business5.photo.attach(io: file22, filename: 'hulahoop3.jpeg')
business5.photo.attach(io: file23, filename: 'hulahoop4.jpeg')
business5.photo.attach(io: file24, filename: 'hulahoop5.jpeg')

review5a = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 5,
    user_id: user10.id,
    business_id: business5.id
)

review5b = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 4,
    user_id: user1.id,
    business_id: business5.id
)

review5c = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 5,
    user_id: user2.id,
    business_id: business5.id
)

review5d = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 4,
    user_id: user3.id,
    business_id: business5.id
)

review5f = Review.create!(
    message: "Or hollow were tones. My into who rather from decisions, the in were its had homeless, he wrong is carpeting in way was it away, time. Were where back he yards from the each competitive would parent, to of even which apparently this dedicated well, like…. The not like round.",
    rating: 1,
    user_id: user1.id,
    business_id: business5.id
)

   #     description:
        #     img_url: "https://s3-media0.fl.yelpcdn.com/bphoto/xZAaAOXByCGjDAUkNsM_ew/348s.jpg"
        #     address: "1000 El Camino Real, Belmont, California, 94002",
        #     phone_number: "(650) 453-3748",
    #     categories: "American (New), ",
    #     cost: "$$",

    # }
    # {
    #     name:
    #     description:
    #     img_url:
    #     address: 
    #     hours:
    #     categories:
    #     cost:

    # },
    # {
    #     name:
    #     description:
    #     img_url:
    #     address: 
    #     hours:
    #     categories:
    #     cost:

    # },
    # {
    #     name:
    #     description:
    #     img_url:
    #     address: 
    #     hour:
    #     categories:
    #     cost:

    # }


# review1a = Review.create!(
#     message: "I've been to more than a few Taco trucks in North Hollywood and this one by far is my Favorite Go-To spot. The food always tastes fresh and the staff is very attentive. The asada is great and so is the al pastor do yourself a favor and spend the extra .25 cents to get the handmade tortillas. Tacos are 1.25 regular or 1.50 for handmade tortillas. Recently they've been giving away a free fresh of either Horcharta, Jamaica or Strawberry juice with every purchase. They are happy to give you grilled jalapeños or onions upon request and with every order they give you a tostada with beans . This truck is open til 3am so it's a great after club spot to grab a bite. When you stop by please make sure to tip the staff they are awesome and seriously go above and beyond. Beware that there is another taco truck nearby that really isn't anywhere near as good",
#     rating: 5,
#     user_id: user2.id,
#     business_id: 1
# )
# review1b = Review.create!(
#     message: "I've been to more than a few Taco trucks in North Hollywood and this one by far is my Favorite Go-To spot. The food always tastes fresh and the staff is very attentive. The asada is great and so is the al pastor do yourself a favor and spend the extra .25 cents to get the handmade tortillas. Tacos are 1.25 regular or 1.50 for handmade tortillas. Recently they've been giving away a free fresh of either Horcharta, Jamaica or Strawberry juice with every purchase. They are happy to give you grilled jalapeños or onions upon request and with every order they give you a tostada with beans . This truck is open til 3am so it's a great after club spot to grab a bite. When you stop by please make sure to tip the staff they are awesome and seriously go above and beyond. Beware that there is another taco truck nearby that really isn't anywhere near as good",
#     rating: 5,
#     user_id: user2.id,
#     business_id: 2
# )
# review1c = Review.create!(
#     message: "I've been to more than a few Taco trucks in North Hollywood and this one by far is my Favorite Go-To spot. The food always tastes fresh and the staff is very attentive. The asada is great and so is the al pastor do yourself a favor and spend the extra .25 cents to get the handmade tortillas. Tacos are 1.25 regular or 1.50 for handmade tortillas. Recently they've been giving away a free fresh of either Horcharta, Jamaica or Strawberry juice with every purchase. They are happy to give you grilled jalapeños or onions upon request and with every order they give you a tostada with beans . This truck is open til 3am so it's a great after club spot to grab a bite. When you stop by please make sure to tip the staff they are awesome and seriously go above and beyond. Beware that there is another taco truck nearby that really isn't anywhere near as good",
#     rating: 4,
#     user_id: user3.id,
#     business_id: 3
# )
# review1d = Review.create!(
#     message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
#     rating: 5,
#     user_id: user4.id,
#     business_id: 4
# )
# review1e = Review.create!(
#     message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
#     rating: 2,
#     user_id: user5.id,
#     business_id: 5
# )
# review1f = Review.create!(
#     message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
#     rating: 5,
#     user_id: user6.id,
#     business_id: 6
# )
# review1g = Review.create!(
#     message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
#     rating: 5,
#     user_id: user6.id,
#     business_id: 2
# )

# user1 = User.create!(
#     fname: "Chandler",
#     lname: "Bing",
#     email: "chandlerbing@email.com",
#     zip_code: 90020,
#     password: "chandlerbing",
#     profile_pic: "chandler"
# )
# user2 = User.create!(
#     fname: "Phoebe",
#     lname: "Buffay",
#     email: "phoebebuffay@email.com",
#     zip_code: 90020,
#     password: "phoebebuffay",
#     profile_pic: "phoebe"
# )
# user3 = User.create!(
#     fname: "Rachel",
#     lname: "Green",
#     email: "rachelgreen@email.com",
#     zip_code: 90005,
#     password: "rachelgreen",
#     profile_pic: "rachel"
# )
# user4 = User.create!(
#     fname: "Ross",
#     lname: "Geller",
#     email: "rossgeller@email.com",
#     zip_code: 90022,
#     password: "rossgeller",
#     profile_pic: "ross"
# )
# user5 = User.create!(
#     fname: "Joey",
#     lname: "Tribbiani",
#     email: "joeytribbiani@email.com",
#     zip_code: 90020,
#     password: "joeytribbiani",
#     profile_pic: "joey"
# )
# user6 = User.create!(
#     fname: "Monica",
#     lname: "Geller",
#     email: "monicageller@email.com",
#     zip_code: 90020,
#     password: "monicageller",
#     profile_pic: "monica"
# )

# # reviews = Review.create([
# #     {
# #         title: 'Great Atmosphere',
# #         description: 'I have such an amazaing experience there',
# #         score: 5,
# #         business: Business.first

# #     },
# #     {
# #         title: 'Awesome!',
# #         description: 'food is delicious and the servers are very nice',
# #         score: 4,
# #         business: Business.first

# #     }
# # ])