
class GuestshipsController < ApplicationController

  def create #creates mulitple guestships
    params[:guestship][:selectedIds].each do |friendId|
      Guestship.create(guest_id: friendId, potluck_id: params[:guestship][:potluck_id])
    end
  end

  def update
    guestship = Guestship.find_by_id(params[:guestship][:guestshipId])
    if guestship.update(rsvp: params[:guestship][:rsvp])
      render json:guestship
    else
      errors = guestship.errors.full_messages
      render json:errors
    end
  end

  def end_guestships #destroy multiple guestships
    params[:guestship][:selectedIds].collect do |id|
      guest = Guestship.find_by(guest_id: id , potluck_id: params[:guestship][:potluck_id])
      Guestship.destroy(guest.id)
    end
  end

end
