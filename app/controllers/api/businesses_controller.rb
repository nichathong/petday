class Api::BusinessesController < ApplicationController
    def index
        # debugger
        bounds = params[:filters][:bounds]
        near = params[:filters][:near]
        find = params[:filters][:find]

        # if near.downcase == "sf"
        #     near = "san francisco"
        # end

        bound_filter = Business.in_bounds(bounds) if bounds

        if near != "" && find != ""
            @business = Business.near_location(params[:filters][:near])
            @finds = Business.find_business(params[:filters][:find])
            @businesses = @business.select { |business| @finds.include?(business) }

            # debugger

            if bound_filter
                @businesses = @businesses.select { |business| bound_filter.include?(business) }
            end

        elsif find == ""
            # debugger
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
            @businesses = Business.all
            if bound_filter
                @businesses = @businesses.select { |business| bound_filter.include?(business) }
            end

        end


        # @businesses = params[:bounds] ? Business.in_bounds(params[:bounds]) : Business.all

        # @businesses = params[:search] ? Business.seach(params[:search][:find], params[:search][:near]) : Business.all
        # if params[:search]
        #     @businesses = Business.seach(params[:search][:find], params[:search][:near])
        # end
        # @businesses = Business.all
        render :index
    end
    
    def show
        # debugger
        @business = Business.with_attached_photo.find(params[:id])
        
        render :show
        
        # render json: BusinessSerializer.new(business, options).serialized_json
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



    # def create
    #     business = Business.new(business_params)
    #     if business.save
    #         render json: BusinessSerializer.new(business).serialized_json
    #     else
    #         render json: { error: business.errors.messages }, status: 422
    #     end
    # end
    
    # def update
    #     business = Business.find_by(slug: params[:slug])
        
    #     if business.update(business_params)
    #         render json: BusinessSerializer.new(business).serialized_json
    #     else
    #         render json: { error: business.errors.messages }, status: 422
    #     end
    # end

    # def destroy
    #     business = Business.find_by(slug: params[:slug])

    #     if business.destroy(business_params)
    #         render :index 
    #     else
    #         render json: { error: business.errors.messages }, status: 422
    #     end
    # end
    # private


    # def options
    #     @options ||= { include: %i[reviews] }
    # end

end
