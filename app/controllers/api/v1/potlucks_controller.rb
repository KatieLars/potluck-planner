module Api
  module V1
    class PotlucksController < ApplicationController
      before_action :authenticate_api_v1_user
      def index
        @potlucks = Potluck.all
        render json: @potlucks
      end

    end
  end
end
