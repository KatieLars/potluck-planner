class PotlucksController < ApplicationController

  def index #hosted potlucks and potlucks for which you are invited
    @total_potlucks = current_user.total_potlucks
    render json:@total_potlucks
  end

  def create
    @potluck = Potluck.new(potluck_params)
    if @potluck.save
      render json: @potluck
    else
      @errors = @potluck.errors.full_messages
      render json:@errors
    end
  end

  def update
    potluck = Potluck.find_by_id(params[:potluck][:id])
    clean_params = recipe_params.reject { |k, v| v.blank? }
    @recipe.update(clean_params)
    render json:@recipe
  end


  private

  def potluck_params
    params.require(:potluck).permit(:image, :time, :date, :location, :user_id, :name, :description)
  end

end
