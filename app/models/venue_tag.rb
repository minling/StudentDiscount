class VenueTag < ActiveRecord::Base
  belongs_to :venue
  belongs_to :tag
end
