class Remove < ActiveRecord::Migration[5.2]
  def change
    change_column_null :businesses, :review_count, true
  end
end
