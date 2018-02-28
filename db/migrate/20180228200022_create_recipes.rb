class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
        t.string :name
        t.string :difficulty
        t.string :url
        t.string :image
        t.boolean :taken, default: false
      t.timestamps
    end
  end
end
