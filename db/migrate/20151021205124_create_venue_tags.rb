class CreateVenueTags < ActiveRecord::Migration
  def change
    create_table :venue_tags do |t|
      t.integer :venue_id
      t.integer :tag_id
      t.timestamps null: false
    end
  end
end
