class RecipesController < ApplicationController

  def index #all recipes to select from even unrelated to viewer
    recipes = {
      user_recipes: {
        cooked_recipes: current_user.list_potluck_recipes,
        new_recipes: current_user.user_created_not_cooked,
        total_recipes: current_user.total_user_recipes
      },
      all_recipes: Recipe.all
    }
    render json:recipes
  end

  def create
    recipe = current_user.recipes.build(recipe_params)
    potluck = Potluck.find_by_id(params[:recipe][:potluck_id])
    if recipe.save && potluck
      PotluckRecipe.create(recipe_id: recipe.id, potluck_id: potluck.id)
      render json:recipe
    elsif recipe.save
      render json:recipe
    else
      errors = recipe.errors.full_messages
      render json:errors
    end
  end

  def update
    @recipe = Recipe.find_by_id(params[:recipe][:id])
    clean_params = recipe_params.reject { |k, v| v.blank? }
    @recipe.update(clean_params)
    render json:@recipe
  end

  private

  def recipe_params
    params.require(:recipe).permit(:image, :name, :url, :difficulty)
  end

end
