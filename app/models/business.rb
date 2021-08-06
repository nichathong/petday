class Business < ApplicationRecord
#       create_table "businesses", force: :cascade do |t|
#     t.string "name", null: false
#     t.string "img_url"
#     t.string "address", null: false
#     t.string "hours", null: false
#     t.string "categories", null: false
#     t.string "cost", null: false
#     t.string "review_count", null: false
#     t.string "phone_number", null: false
#     t.string "slug"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.index ["cost"], name: "index_businesses_on_cost"
#     t.index ["name"], name: "index_businesses_on_name"
#   end
    validates :name, :img_url, :address, :hours, :categories, presence: true

    has_many :reviews

    before_create :slugify

    def slugify
        self.slug = name.parameterize
    end

    def avg_score
        reviews.average(:score).round(2).to_f
    end


end