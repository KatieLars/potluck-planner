
class GuestshipsController < ApplicationController

  def update
    guestship = Guestship.find_by_id(params[:guestship][:guestshipId])
    if guestship.update(rsvp: params[:guestship][:rsvp])
      render json:guestship
    else
      errors = guestship.errors.full_messages
      render json:errors
    end
  end

  def end_guestships
    params[:guestship][:selectedIds].each do |guestship|
      Guestship.destroy(guestship)
    end
    potluck = Potluck.find_by_id(params[:guestship][:potluck_id])
    render json:potluck
  end

end
