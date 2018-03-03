class RemoveTakenColumnFromRecipes < ActiveRecord::Migration[5.1]
  def change
    remove_column :recipes, :taken
  end
end
