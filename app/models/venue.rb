class Venue < ActiveRecord::Base
  has_many :venue_tags
  has_many :tags, :through => :venue_tags

  accepts_nested_attributes_for :tags, allow_destroy: true, :reject_if => lambda { |a| a[:name].blank? }

  def self.get_maps_array
    self.all.map do |venue|
      [venue.name, venue.latitude, venue.longitude, venue.discount, venue.address, venue.tags.map { |tag| tag.name }]
    end
  end

end
