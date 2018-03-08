class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create]

    def index
      @users = User.all
      render json:@users
    end

    def create #create a new user then log them in
      @user = User.new(user_params)
      if @user.save
        render json:@user
      else
        @errors = @user.errors.full_messages
        render json:@errors
      end
    end

    def update
      @user = User.find_by_id(params[:user][:id])
      clean_params = user_params.reject { |k, v| v.blank? }
      @user.update(clean_params)
      render json:@user
    end

    def find
      @user = User.find_by(email: params[:user][:email])
      if @user
        render json:@user
      else
        @errors = @user.errors.full_messages
        render json:@errors
      end
    end

    def not_friends
      @user = User.find_by_id(params[:user_id])
      render json:@user
    end


  private

    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation, :image)
    end

end
