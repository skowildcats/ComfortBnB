class ChangeBathName < ActiveRecord::Migration[5.2]
  def change
    rename_column :properties, :num_bath, :num_baths
  end
end
