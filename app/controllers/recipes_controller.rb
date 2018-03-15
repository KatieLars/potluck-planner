class RecipesController < ApplicationController

  def index #all recipes to select from even unrelated to viewer
    @recipes = Recipe.all
    render json:@recipes
  end

end
