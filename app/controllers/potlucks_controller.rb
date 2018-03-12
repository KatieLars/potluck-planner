class PotlucksController < ApplicationController

  def index #hosted potlucks and potlucks for which you are invited
    @total_potlucks = current_user.total_potlucks
    render json: @total_potlucks
  end

end
