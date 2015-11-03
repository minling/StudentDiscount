class ChangeCoordianteFormatInTable < ActiveRecord::Migration
  def change
    change_column :venues, :latitude, :float
    change_column :venues, :longitude, :float
  end
end
