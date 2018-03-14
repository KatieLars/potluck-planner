class AddRsvpColumnToGuestships < ActiveRecord::Migration[5.1]
  def change
    add_column :guestships, :rsvp, :string
  end
end
