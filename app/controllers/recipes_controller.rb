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
    @recipe = current_user.recipes.build(recipe_params)
    if @recipe.save
      render json:@recipe
    else
      @errors = @potluck.errors.full_messages
      render json:@errors
    end
  end

  def update
    binding.pry
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
