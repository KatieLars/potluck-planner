class PotlucksController < ApplicationController

  def index
    @total_potlucks = current_user.total_potlucks
    render json: @total_potlucks
  end

end
