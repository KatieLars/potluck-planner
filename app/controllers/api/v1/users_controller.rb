module Api
  module V1

    class Users < ApplicationController
      before_action :authenticate_api_v1_user
      skip_before_action :authentication_api_v1_user, only: [:new, :create]

    end
  end
end
