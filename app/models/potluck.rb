class Potluck < ApplicationRecord#may need foreign keys specified
  belongs_to :host, classname :user, foreign_key: :user_id
  has_many :guestships
  has_many :guests, through: :guestships
  has_many :potluck_recipes
  has many :recipes, through: :potluck_recipes


end
