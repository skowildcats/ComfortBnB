class AddPrice < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :price, :integer, null: false
  end
end
