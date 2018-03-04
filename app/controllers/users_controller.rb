module Api
  module V1

    class Users < ApplicationController
      skip_before_action :authentication_api_v1_user, only: [:create]

    end
  end
end
