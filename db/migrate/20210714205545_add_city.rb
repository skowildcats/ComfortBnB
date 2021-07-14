class AddCity < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :city, :string, null: false
  end
end
