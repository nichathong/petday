class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false, unique: true
      t.string :img_url
      t.string :address, null: false, unique: true
      t.string :hours, null: false
      t.string :categories, null: false
      t.string :cost, null: false
      t.string :review_count, null: false
      t.string :phone_number, null: false
      t.string :slug

      t.timestamps
    end
    add_index :businesses, :name
    add_index :businesses, :cost
  end
end
