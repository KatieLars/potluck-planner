class Recipe < ApplicationRecord
  has_many :potluck_recipes
  has_many :potlucks, through: :potluck_recipes
  belongs_to :user
  dependent: delete_all

end
