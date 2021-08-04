class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :firstname, :string, null: false 
    add_column :users, :lastname, :string, null: false 
    add_column :users, :zipcode, :string, null: false
    add_column :users, :birthmonth, :string
    add_column :users, :birthday, :string
    add_column :users, :birthyear, :string
  end
end
