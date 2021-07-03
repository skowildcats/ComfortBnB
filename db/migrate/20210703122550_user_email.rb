class UserEmail < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :email, :string
    change_column_null :users, :fname, false
  end
end
