class Tag < ActiveRecord::Base
  has_many :venue_tags
  has_many :venues, :through => :venue_tags

  validates_uniqueness_of :name
  validates_presence_of :name
end
