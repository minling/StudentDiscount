class Tag < ActiveRecord::Base
  has_many :venue_tags
  has_many :venues, :through => :venue_tags

end
