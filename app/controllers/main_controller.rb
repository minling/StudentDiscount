class MainController < ApplicationController

  def index
    # @map = Venue.get_maps_array
    # binding.pry
    gon.locations = Venue.get_maps_array
  end
end
