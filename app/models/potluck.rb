class Potluck < ApplicationRecord#may need foreign keys specified
  belongs_to :user
  has_many :guestships
  has_many :guests, through: :guestships #people that are invited
  has_many :potluck_recipes
  has_many :recipes, through: :potluck_recipes
  has_manys :potluck_attendees #people that are coming


end
