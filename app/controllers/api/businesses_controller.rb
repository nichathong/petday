class Api::BusinessesController < ApplicationController
    def index
        @businesses = params[:bounds] ? Business.in_bounds(params[:bounds]) : Business.all

        @businesses = params[:search] ? Business.seach(params[:search][:find], params[:search][:near]) : Business.all
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
    
    private
    
    def business_params
        params.require(:business).permit(:name, :image_url, :slug, :address, :hours, :categories, :cost, :review_count, :phone_number)
    end


    # def omnisearch
    #     @businesses = Business
    #                     .where("LOWER(name) LIKE ? OR LOWER(category) LIKE ?",
    #                     "%#{params[:query]}%".downcase, "%#{params[:query]}%".downcase)
    #                     .limit(10)
    #     render :index
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
