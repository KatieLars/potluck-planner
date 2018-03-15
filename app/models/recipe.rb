class Recipe < ApplicationRecord
  has_many :potluck_recipes
  has_many :potlucks, through: :potluck_recipes
  belongs_to :user

  def cooked_recipes #returns cooked recipes
    Recipe.all.find_all do |recipe|
      recipe.potluck_recipes.any? {|potluck_recipe| current_user.id == potluck_recipe.user_id}
    end
  end
  
end
