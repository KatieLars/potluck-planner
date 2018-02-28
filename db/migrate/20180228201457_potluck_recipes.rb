class PotluckRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :potluck_recipes do |t|
      t.integer :potluck_id
      t.integer :recipe_id
      t.timestamps
    end
  end
end
