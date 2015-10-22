class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
      t.string :name
      t.string :discount
      t.string :address
      t.timestamps null: false
    end
  end
end
