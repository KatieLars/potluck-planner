class PotluckRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :potluck_recipes do |t|

      t.timestamps
    end
  end
end
