
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
