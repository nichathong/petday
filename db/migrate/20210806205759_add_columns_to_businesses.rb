class AddColumnsToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :lat, :float, null: false
    add_column :businesses, :long, :float, null: false
    add_column :businesses, :site_url, :string
  end
end
