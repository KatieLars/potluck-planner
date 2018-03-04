module Api
  module V1

    class Users < ApplicationController
      skip_before_action :authenticate, only: [:create]

    end
  end
end
