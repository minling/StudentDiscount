class MainController < ApplicationController

  def index
    @venues = Venue.all
    gon.locations = Venue.get_maps_array
  end
end
