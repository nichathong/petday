class AddReviewToBusinesses < ActiveRecord::Migration[6.1]
  def change
    rename_table :busniesses, :businesses
    add_reference :reviews, :business, foreign_key: true, null: false 
  end
end
