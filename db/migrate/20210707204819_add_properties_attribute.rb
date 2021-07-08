class AddPropertiesAttribute < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :max_guests, :integer, null: false
    add_column :properties, :num_bedrooms, :integer, null: false
    add_column :properties, :num_beds, :integer, null: false
    add_column :properties, :num_bath, :integer, null: false
  end
end
