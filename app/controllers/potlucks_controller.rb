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
    clean_params = potluck_params.reject { |k, v| v.blank? }
    potluck.update(clean_params)
    render json:potluck
  end


  private

  def potluck_params
    params.require(:potluck).permit(:image, :time, :date, :location, :user_id, :name, :canceled, :description)
  end

end
