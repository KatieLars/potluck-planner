class Potlucks < ActiveRecord::Migration[5.1]
  def change
    create_table :potlucks do |t|
      t.string :name
      t.string :location
      t.string :description
      t.datetime :happening
      t.string :image
      t.integer :host_id
      t.timestamps
    end
  end
end
