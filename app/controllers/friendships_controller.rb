
class FriendshipsController < ApplicationController

  def end_friendships#returns new friendships hashs
    params[:friendship].each do |friendship|
      Friendship.destroy(friendship)
    end
    @newFriendships = current_user.friends_with_friendships
    render json:@newFriendships
  end

  def friends
    @friends = current_user.friends_with_friendships
    render json:@friends
  end
end
