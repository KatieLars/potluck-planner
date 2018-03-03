class CreateTablePotluckAttendees < ActiveRecord::Migration[5.1]
  def change
    create_table :table_potluck_attendees do |t|
      t.integer :user_id
      t.integer :potluck_id
      t.timestamp
    end
  end
end
