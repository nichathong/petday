class AddWebiteToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :website, :string
  end
end
