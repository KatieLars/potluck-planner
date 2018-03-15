class RecipesController < ApplicationController

  def index #all recipes to select from even unrelated to viewer
    @recipes = Recipe.all
    render json:@recipes
  end

  def create
    @recipe = current_user.recipes.build(recipe_params)
    if @recipe.save
      render json:@recipe
    else
      @errors = @potluck.errors.full_messages
      render json:@errors
    end
  end

end
