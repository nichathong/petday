class Api::BusinessesController < ApplicationController
    #fetching businesses by filter the the business
    #each of the the condition filter the businesses base on either name and/or location
    #note that bounds locatates the latitute and longitude for map
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

        else near == ""
            @finds = Business.find_business(params[:filters][:find])
            @businesses = Business.select { |business| @finds.include?(business) } 

            if bound_filter
                @businesses = @businesses.select { |business| bound_filter.include?(business) }
            end
            
        #else
            # @businesses = params[:bounds] ? Business.in_bounds(params[:bounds]) : Business.all

        end

        render :index
    end
    
    def show

        @business = Business.with_attached_photo.find(params[:id])
        
        render :show
    end

    def create
        # debugger
        @business = Business.new(business_params)
        if @business.save
            render :show
        else
            render json: @business.errors.full_messages, status: 422
        end
    end

    def update 
        @business = Business.find(params[:id])
        # debugger
        if @business.update(business_params)
            if @business.save
                render :show
            else
                render json: @business.errors.full_messages, status: 401
            end
        end
    end
    
    private

    def business_params
        params.require(:business).permit(:name, :image_url, :lat, :long, :slug, :address, :hours, :categories, :cost, :review_count, :phone_number, :photo)
    end


end
