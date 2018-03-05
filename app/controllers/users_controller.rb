class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create]

    def index
      @users = User.all
      render json:@users
    end

    def create #create a new user then log them in
      @user = User.new(user_params)
      if @user.save
        redirect_to user_token_path({auth: {email: user_params[:user][:email], password: user_params[:user][:password]})
      else
        @errors = @user.errors.full_messages
        render json:@errors
      end
    end


  private

    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation, :image)
    end

end
