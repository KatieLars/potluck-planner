class AddColumnToPotluckRecipes < ActiveRecord::Migration[5.1]
  def change
    add_column :potluck_recipes, :user_id, :integer
  end
end
