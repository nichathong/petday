class CreateBusniesses < ActiveRecord::Migration[6.1]
  def change
    create_table :businesses do |t|
      t.string :name, null: false, unique: true
      t.text :description 
      t.string :img_url 
      t.string :address, null: false, unique: true
      t.string :hours, null: false
      t.string :categories, null: false
      t.integer :stars
      t.string :cost, null: false
      t.integer :review_count, null: false
      t.string :phone_number, null: false
      t.string :slug
      
      t.timestamps
    end
    add_index :businesses, :name
    add_index :businesses, :stars 
    add_index :businesses, :cost

  end
end
