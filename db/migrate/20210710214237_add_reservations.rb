class AddReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :checkin_date, :datetime, null: false
    add_column :reservations, :checkout_date, :datetime, null: false
  end
end
