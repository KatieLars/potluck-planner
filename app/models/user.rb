class User < ApplicationRecord
  has_secure_password
  has_many :guestships, foreign_key: :guest_id
  has_many :potlucks #these are the potlucks the user hosts
  has_many :recipes
  has_many :friendships
  has_many :friends, through: :friendships
  has_many :potluck_recipes

  def guest_potlucks #returns a list of potlucks where the person is a guest
    self.guestships.collect {|p| p.potluck}
  end

  def total_potlucks #returns a list of total potlucks
    self.guest_potlucks.push(self.potlucks).flatten
  end

  def total_recipes #all recipes from host and guest potlucks
    self.total_potlucks.collect {|r| r.recipes}.flatten
  end

end
