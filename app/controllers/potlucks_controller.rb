class PotlucksController < ApplicationController

  def index
    @potlucks = Potluck.all
    render json: @potlucks
  end

end
