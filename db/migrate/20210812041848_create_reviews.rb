class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :message, null: false
      t.integer :rating, null: false
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.timestamps null: false

    end
    add_index :reviews, :business_id
    add_index :reviews, :user_id
  end
end
