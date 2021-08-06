class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        if @review.save
            render json: ReviewSerializer.new(@review).serialized_json
        else
            render json: { errors: review.errors.messages }, status: 422
        end
    end

    def destroy
        @review = Review.find_by(params[:id])

        if @review.destroy
            redirect_to "/api/business/#{params[:slug]}"
        else
            render json: { errors: review.errors.messages }, status: 422
        end

    end

    def review_params
        params.require(:review).permit(:title, :description, :score, :business_id)
    end





end
