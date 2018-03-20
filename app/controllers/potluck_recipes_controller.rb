class PotluckRecipesController < ApplicationController

  def create #creates potluck_recipes from array of Ids
    potluck_recipes =
      params[:potluck_recipes][:recipe_ids].collect do |recipe_id|
        PotluckRecipe.create(potluck_id: params[:potluck_recipes][:potluck_id], recipe_id: recipe_id)
      end
    render json:potluck_recipes
  end

  def claim
    potluck_recipe = PotluckRecipe.find_by(potluck_id: params[:info][:potluck_id], recipe_id: params[:info][:recipe_id])
    if potluck_recipe
      if potluck_recipe.user_id != params[:info][:user_id]
        potluck_recipe.update(user_id: params[:info][:user_id])
      else
        potluck_recipe.update(user_id: nil)
      end
    else
      errors = potluck_recipe.errors.full_messages
      render json:errors
    end
  end

end
