class Business < ApplicationRecord
    validates :name, :address, :hours, :categories, :phone_number, :cost, :lat, :long,  presence: true

    has_many :reviews

    has_many_attached :photo

    def avg_score
        reviews.average(:score).round(2).to_f
    end

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("long > ?", bounds[:southWest][:long])
        .where("long < ?", bounds[:northEast][:long])
    end
    
    def self.near_location(location)

        Business.where("lower(address) LIKE ? ", "%#{location}%")
    end

    def self.find_business(categories)

        Business.where(
            "lower(categories) LIKE ? or lower(name) LIKE ?",
            "%#{categories[1..3].downcase}%", 
            "%#{categories[1..3].downcase}%" 
        )
    end

end