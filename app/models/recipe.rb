class Recipe < ApplicationRecord
  has_many :potluck_recipes
  has_many :potlucks, through: :potluck_recipes
  has_many :users, through: :potlucks
end
