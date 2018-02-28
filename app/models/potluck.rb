class Potluck < ApplicationRecord#may need foreign keys specified

  has_many :guestships
  has_many :guests, through: :guestships
  has_many :potluck_recipes
  has_many :recipes, through: :potluck_recipes


end
