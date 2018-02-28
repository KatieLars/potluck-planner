class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :name
      t.string :image
      t.boolean :host, default: false
      t.string :rsvp

      t.timestamps
    end
  end
end
