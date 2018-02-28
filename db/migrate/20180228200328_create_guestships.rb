class CreateGuestships < ActiveRecord::Migration[5.1]
  def change
    create_table :guestships do |t|
      t.integer :guest_id
      t.integer :potluck_id
      t.timestamps
    end
  end
end
