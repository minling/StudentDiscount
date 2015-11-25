class VenuesController < ApplicationController
  
  def index
    @venues = Venue.all
  end

  def show 

  end

  def new 
    @venue = Venue.new
  end

  def create
    # binding.pry
    @venue = Venue.new(venue_params)
    @venue.save
    redirect_to root_path
  end

  private
    def venue_params
      params.require(:venue).permit(:name, :address, :discount, :latitude, :longitude, :tags_attributes =>[:name],:tag_ids => [])
    end

end
