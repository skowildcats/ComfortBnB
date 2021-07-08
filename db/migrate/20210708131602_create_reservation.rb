class CreateReservation < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      
      t.integer :num_guests, null: false
      t.integer :user_id, null: false
      t.integer :property_id, null: false

      t.timestamps
    end
    add_index :reservations, :user_id
    add_index :reservations, :property_id
  end
end
