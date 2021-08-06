class ChangeColumType < ActiveRecord::Migration[5.2]
  def change
     change_column :reviews, :score, :integer, using: 'score::integer'
  end
end
