class RecipesController < ApplicationController

  def index #all recipes to select from even unrelated to viewer
    @recipes = {
      user_recipes: {
        cooked_recipes: {
          current_user.cooked_recipes
        },
        new_recipes: {
          current_user.new_recipes
        },
        allRecipes: Recipe.all
      }
    }
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

  private

  def recipe_params
    params.require(:recipe).permit(:image, :name, :url, :difficulty)
  end

end
