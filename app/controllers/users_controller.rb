class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create]

    def index
      @users = User.all
      render json:@users
    end

    def create #create a new user then log them in
      @user = User.new
      binding.pry
    end
end
