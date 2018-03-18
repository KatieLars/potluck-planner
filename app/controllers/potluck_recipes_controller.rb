class PotluckRecipesController < ApplicationController

  def create #creates potluck_recipes from array of Ids
    potluck_recipes =
      params[:potluck_recipes][:recipe_ids].collect do |recipe_id|
        PotluckRecipe.create(potluck_id: params[:potluck_recipes][:potluck_id], recipe_id: recipe_id)
      end
    render json:potluck_recipes
  end
end
