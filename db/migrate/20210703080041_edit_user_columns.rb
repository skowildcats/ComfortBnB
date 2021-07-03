class EditUserColumns < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :fname, false
    change_column_null :users, :lname, false
  end
end
