class Recipe < ApplicationRecord
  has_many :potluck_recipes
  has_many :potlucks, through: :potluck_recipes
  belongs_to :user

  def cooked_recipes
    current_user.list_potluck_recipes
  end

  def new_recipes #created not cooked
    current_user.user_created_not_cooked
  end

  def total_recipes #created and/or cooked
    current_user.total_user_recipes
  end

end
