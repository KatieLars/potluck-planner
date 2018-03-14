class DropPotluckAttendeesTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :potluck_attendees
  end
end
