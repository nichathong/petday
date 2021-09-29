class Business < ApplicationRecord
    validates :name, :address, :hours, :categories, :phone_number, :cost, :lat, :long,  presence: true

    has_many :reviews

    has_many_attached :photo

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

    def self.search(find, near)
        if find==nil 
            Business.where("lower(city) LIKE ? OR lower(address) LIKE ? ", "%#{find.downcase}%", "%#{find.downcase}%")
        elsif near==nil
            Business.where("lower(category) LIKE ? OR lower(name) LIKE ? ", " %#{near[1..3].downcase}%", " %#{near[1..3].downcase}%")
        else
            Business.where("(lower(category) LIKE :find OR lower(name) LIKE :value) AND (lower(address) LIKE :near OR lower(city) LIKE :near)", find: "%#{find.downcase}%", near: "%#{near.downcase}%")
        end
    end

    # def self.near_location(location)
    #     Business.where("lower(city) LIKE ? or lower(address) LIKE ? ")
    # end

    # def self.find_business(category)
    #     Business.where(
    #         "lower(category) LIKE ? or lower(name) LIKE ?",
    #         "%#{category[1..3].downcase}%", 
    #         "%#{category[1..3].downcase}%", 
    #         "%#{category[1..3].downcase}%"
    #     )
    # end


end