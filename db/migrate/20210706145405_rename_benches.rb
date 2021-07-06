class RenameBenches < ActiveRecord::Migration[5.2]
  def change
    rename_table :benches, :properties
  end
end
