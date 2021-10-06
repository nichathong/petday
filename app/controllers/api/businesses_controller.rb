class Api::BusinessesController < ApplicationController
    def index
        # debugger
        bounds = params[:filters][:bounds]
        near = params[:filters][:near]
        find = params[:filters][:find]

        if near.downcase == "sf"
            near = "san francisco"
        end

        cookies[:near] = params[:filters][:near]
        cookies[:find] = params[:filters][:find]

        bound_filter = Business.in_bounds(bounds) if bounds

        if near != "" && find != ""
            @business = Business.near_location(cookies[:near])
            @finds = Business.find_business(cookies[:find])
            @businesses = @business.select { |business| @finds.include?(business) }

            if bound_filter
                @businesses = Business.near_location(cookies[:near])
            end
        elsif find == ""
            @businesses = Business.near_location(cookies[:near])

            if bound_filter
                @businesses = @businesses.select { |business| bound_filter.include?(business) }
            end
        elsif near == ""
            @finds = Business.find_business(cookies[:find])
            @businesses = Business.select { |business| @finds.include?(business) } 

            if bound_filter
                @businesses = @businesses.select { |business| bound_filter.include?(business) }
            end
        end

        # @businesses = params[:bounds] ? Business.in_bounds(params[:bounds]) : Business.all

        # @businesses = params[:search] ? Business.seach(params[:search][:find], params[:search][:near]) : Business.all
        # if params[:search]
        #     @businesses = Business.seach(params[:search][:find], params[:search][:near])
        # end
        render :index
    end
    
    def show
        # debugger
        # @business = Business.find_by(slug: params[:slug])
        @business = Business.find(params[:id])
        
        render :show
        
        # render json: BusinessSerializer.new(business, options).serialized_json
    end
    
    # def omnisearch
    #     @businesses = Business
    #                     .where("LOWER(name) LIKE ? OR LOWER(category) LIKE ?",
    #                     "%#{params[:query]}%".downcase, "%#{params[:query]}%".downcase)
    #                     .limit(10)
    #     render :index
    # end
    # private

    # def business_params
    #     params.require(:business).permit(:name, :image_url, :slug, :address, :hours, :categories, :cost, :review_count, :phone_number)
    # end



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
