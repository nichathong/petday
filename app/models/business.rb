class Business < ApplicationRecord
    validates :name, :address, :hours, :categories, :phone_number, :cost, :lat, :long,  presence: true

    has_many :reviews

    # before_create :slugify

    # def slugify
    #     self.slug = name.parameterize
    # end

    def avg_score
        reviews.average(:score).round(2).to_f
    end

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("long > ?", bounds[:southWest][:long])
        .where("long < ?", bounds[:northEast][:long])
    end


end