class User < ApplicationRecord
  has_secure_password
  has_many :guestships, foreign_key: :guest_id
  has_many :potlucks #these are the potlucks the user hosts
  has_many :recipes, through: :potlucks
  has_many :friendships
  has_many :friends, through: :friendships

  def guest_potlucks #returns a list of potlucks where the person is a guest
    self.guestships.collect {|p| p.potluck}
  end

  def total_potlucks #returns a list of total potlucks
    self.guest_potlucks.push(self.potlucks)
  end

  def total_recipes #all recipes from host and guest potlucks
    self.total_potlucks.collect {|r| r.recipes}
  end

end
