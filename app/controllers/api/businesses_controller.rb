class Api::BusinessesController < ApplicationController
    #After Rails recieves an incoming request for specific HTTP method, it asks the router to map it to a controller action
    #Rails then dispatch the request to the actions on this Businesses controller

    #I've decided to filter all the businesses search on the back-end

    #index action is responsible for fetching businesses based on filters such as name, location and bounds.
    #The code retrieves the filter parameters from the request's params hash, and then applies the relevant filter(s) to the list of all businesses
    #If both near and find parameters are present, then businesses are first filtered by location (near), and then by name or category (find)
    #If only one of the parameters is present, then businesses are filtered only by that parameter.
    #If neither parameter is present, then all businesses are returned.
    #In index action also uses class methods that I created like .in_bounds, .near_location, and .find_business
        #.in_bounds takes a bounds hash parameter, which contains the latitude and longitude coordinates of a rectangular boundary, and returns all businesses within that boundary. 
        #.near_location takes a location parameter and returns businesses whose address includes that location string. 
        #.find_business takes a categories parameter and returns businesses whose categories or names contain the first three characters of the categories string.
    
        def index
        @businesses = Business.all 
        bounds = params[:filters][:bounds]
        near = params[:filters][:near]
        find = params[:filters][:find]

        bound_filter = Business.in_bounds(bounds) if bounds

        if near != "" && find != ""
            @business = Business.near_location(params[:filters][:near])
            @finds = Business.find_business(params[:filters][:find])
            @businesses = @business.select { |business| @finds.include?(business) }

            if bound_filter
                @businesses = @businesses.select { |business| bound_filter.include?(business) }
            end

        elsif find == ""
            @businesses = Business.near_location(params[:filters][:near])

            if bound_filter
                @businesses = @businesses.select { |business| bound_filter.include?(business) }
            end

        elsif near == ""
            @finds = Business.find_business(params[:filters][:find])
            @businesses = Business.select { |business| @finds.include?(business) } 

            if bound_filter
                @businesses = @businesses.select { |business| bound_filter.include?(business) }
            end
            
        else
            @businesses = params[:bounds] ? Business.in_bounds(params[:bounds]) : Business.all

        end

        render :index
    end
    
    #show action retrieves a specific business with the specified id and renders its details, including any attached photos.
    def show
        @business = Business.with_attached_photo.find(params[:id])
        
        render :show
    end

    #create action creates a new business based on the parameters passed in the request's params hash. 
    #If the business is successfully created, it is rendered in the response. 
    #If there are any errors, the response includes a 422 status code and a JSON object with the error messages.
    
    def create
        @business = Business.new(business_params)
        if @business.save
            render :show
        else
            render json: @business.errors.full_messages, status: 422
        end
    end

    #update action finds an existing business with the specified id and updates its attributes based on the parameters in the request's params hash. 
    #If the update is successful, the updated business is rendered in the response. 
    #If there are any errors, the response includes a 401 status code and a JSON object with the error messages.
    
    def update 
        @business = Business.find(params[:id])
        if @business.update(business_params)
            if @business.save
                render :show
            else
                render json: @business.errors.full_messages, status: 401
            end
        end
    end
    
    private

    #The business_params method is a private helper method that returns a filtered params hash, allowing only certain attributes of a business to be accessed for security reasons.

    def business_params
        params.require(:business).permit(:name, :image_url, :lat, :long, :slug, :address, :hours, :categories, :cost, :review_count, :phone_number, :photo)
    end

end
