class AddCoordinatesToVenues < ActiveRecord::Migration
  def change
    add_column :venues, :latitude, :string
    add_column :venues, :longitude, :string
  end
end
