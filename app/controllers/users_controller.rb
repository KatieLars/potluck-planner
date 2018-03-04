class Users < ApplicationController
    skip_before_action :authenticate_user, only: [:create]
end
