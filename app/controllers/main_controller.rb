class MainController < ApplicationController

  def index
    gon.locations = Venue.get_maps_array
  end
end
