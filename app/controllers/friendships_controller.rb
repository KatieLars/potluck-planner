
class FriendshipsController < ApplicationController

  def end_friendships#destroys multiple friendships
    params[:friendship].each do |friendship|
      Friendship.destroy(friendship)
    end
    @newFriendships = current_user.friendships
    render json:@newFriendships
  end

end
