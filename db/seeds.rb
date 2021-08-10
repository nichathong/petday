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

reviews = Review.create([
    {
        title: 'Great Atmosphere',
        description: 'I have such an amazaing experience there',
        score: 5,
        business: Business.first

    },
    {
        title: 'Awesome!',
        description: 'food is delicious and the servers are very nice',
        score: 4,
        business: Business.first

    }
])