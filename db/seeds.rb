# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

businesses = Business.create([
    {
        name: "New England Lobster Market & Eatery",
        img_url: "https://s3-media0.fl.yelpcdn.com/bphoto/eIEvQKEdybaW7Xx3ZYRsyw/ls.jpg",
        address: "824 Cowan Rd, Burlingame, California, 94010",
        phone_number: "(650) 443-1559",
        categories: "Seafood Markets, Seafood, Tapas/Small Plates",
        cost: "$$",
        hours: "Mon	10:00 am - 9:00 pm, Tue	10:00 am - 9:00 pm, Wed	10:00 am - 9:00 pm, Thu	10:00 am - 9:00 pm, Fri	10:00 am - 10:00 pm, Sat	9:00 am	- 10:00 pm, Sun	9:00 am	- 9:00 pm",
        lat: "37.60324840042443",
        long: "-122.37481763068352"
    },
    {
        name: "Crepevine Restaurants",
        img_url: "https://www.yelp.com/biz/crepevine-restaurants-burlingame-2?osq=Pet+Friendly+Restaurant",
        address: "1310 Burlingame Ave, Burlingame, California, 94010",
        phone_number: "(650) 344-1310",
        categories: "American (New), Breakfast & Brunch, Creperies",
        cost: "$$",
        hours: "Mon	8:00 am	- 9:00 pm, Tue	8:00 am	- 9:00 pm, Wed	8:00 am	- 9:00 pm, Thu	8:00 am	- 9:00 pm, Fri	8:00 am	- 9:00 pm, Sat	8:00 am	- 9:00 pm, Sun	8:00 am	- 9:00 pm",
        lat: "37.57861321893335", 
        long: "-122.34757297374277"

    },
    {
        name: "Maverick Jack's",
        img_url: "https://s3-media0.fl.yelpcdn.com/bphoto/OnHjCuVgckxAgDRre1K7Mw/ls.jpg",
        address: "1190 California Dr, Burlingame, California, 94010",
        phone_number: "(650) 347-3061",
        categories: "American (New), Burger",
        cost: "$$",
        hours: "Mon	11:00 am - 2:00 pm, Mon	5:00 pm	- 8:00 pm, Tue	11:00 am - 2:00 pm, Tue	5:00 pm	- 8:00 pm, Wed	11:00 am - 2:00 pm, Wed	5:00 pm	- 8:00 pm, Thu	11:00 am - 2:00 pm, Thu	5:00 pm	- 8:00 pm, Fri	11:00 am - 2:00 pm, Fri	5:00 pm	- 8:00 pm, Sat	11:00 am - 2:00 pm, Sat	5:00 pm	- 8:00 pm, Sun	11:00 am - 2:00 pm, Sun	5:00 pm	- 8:00 pm",
        lat: "37.587809827081045",
        long: "-122.36289300072987"

    },
    {
        name: "Rise Woodfire",
        img_url: "https://s3-media0.fl.yelpcdn.com/bphoto/lHGzQgBq0mI0M6CeTCcJzA/ls.jpg",
        address: "2 N B St, San Mateo, California, 94401",
        phone_number: "(650) 389-6918",
        categories: "Bars, American (Traditional), Pizza",
        cost: "$$",
        hours: "Mon	11:00 am - 9:00 pm, Tue	11:00 am - 9:00 pm, Wed	11:00 am - 9:00 pm, Thu	11:00 am - 9:00 pm, Fri	11:00 am - 10:00 pm, Sat	11:00 am - 10:00 pm, Sun	11:00 am - 9:00 pm",
        lat: "37.568163439635676",
        long: "-122.3240314007304"

    },
    {
        name: "Hula Hoops",
        img_url: "https://s3-media0.fl.yelpcdn.com/bphoto/QTye38JBo9VrCHfW_V9Q2A/ls.jpg",
        address: "2278 Westborough Blvd, Ste 203, South San Francisco, California, 94080",
        phone_number: "(650) 952-3255",
        categories: "Venues & Event Spaces, Asian Fusion, Tiki Bars",
        cost: "$$",
        hours: "Tue	4:00 pm	- 9:00 pm, Wed	4:00 pm	- 9:00 pm, Thu	4:00 pm	- 9:30 pm, Fri	4:00 pm	- 9:30 pm, Sat	10:00 am - 3:00 pm, Sun	10:00 am - 3:00 pm",
        lat: "37.6451097646044", 
        long: "-122.45258191606997"

    }
    # {
    #     name: "Dog Haus"
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

])

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