class Venue < ActiveRecord::Base
  has_many :venue_tags
  has_many :tags, :through => :venue_tags

  accepts_nested_attributes_for :tags, allow_destroy: true
end
