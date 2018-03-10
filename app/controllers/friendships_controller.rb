
class FriendshipsController < ApplicationController

  def end_friendships#destroys a series of friendships and returns updated friendships hash
    params[:friendship].each do |friendship|
      Friendship.destroy(friendship)
    end
    @newFriendships = current_user.friends_with_friendships
    render json:@newFriendships
  end

  def friends #list of current friends for a user
    @friends = current_user.friends_with_friendships
    render json:@friends
  end

  def not_friends #list of current users who are NOT friends
    @not_friends = current_user.not_friends
    render json:@not_friends
  end

  def add_friends #adds a series of friends based on IDs
    #creates friendships and returns a series of friends
    params[:newFriends]
  end

end
