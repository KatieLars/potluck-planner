class PotlucksController < ApplicationController

  def index #hosted potlucks and potlucks for which you are invited
    @total_potlucks = { #potlucks, plus total amount of potluck recipes
      potlucks: current_user.total_potlucks,
      total_potluck_recipes: current_user.total_potluck_recipes
    }
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
  end


  private

  def potluck_params
    params.require(:potluck).permit(:image, :time, :date, :location, :user_id, :name, :description)
  end

end
