module Api
  module V1
    class PotlucksController < ApplicationController
      def index
        @potlucks = Potluck.all
        render json: @potlucks
      end

    end
  end
end
