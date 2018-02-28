class CreateGuestships < ActiveRecord::Migration[5.1]
  def change
    create_table :guestships do |t|

      t.timestamps
    end
  end
end
