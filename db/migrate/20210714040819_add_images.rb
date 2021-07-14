class AddImages < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :image_urls, :string, array: true, default: []
  end
end
