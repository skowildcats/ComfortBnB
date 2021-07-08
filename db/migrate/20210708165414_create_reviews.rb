class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :body, default: "", null: false
      t.integer :rating, null: false
      t.integer :property_id, null: false

      t.timestamps
    end
    add_index :reviews, :property_id
  end
end
