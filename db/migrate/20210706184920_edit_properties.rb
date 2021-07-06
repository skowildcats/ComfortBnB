class EditProperties < ActiveRecord::Migration[5.2]
  def change
    rename_column :properties, :desription, :description
  end
end
