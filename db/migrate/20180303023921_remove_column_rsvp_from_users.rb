class RemoveColumnRsvpFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :rsvp
  end
end
