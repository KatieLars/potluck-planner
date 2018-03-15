class Recipe < ApplicationRecord
  has_many :potluck_recipes
  has_many :potlucks, through: :potluck_recipes
  belongs_to :user

  def self.cooked_recipes
    current_user.list_potluck_recipes
  end

  def self.new_recipes #created not cooked
    current_user.user_created_not_cooked
  end

  def self.total_recipes #created and/or cooked
    current_user.total_user_recipes
  end

end
