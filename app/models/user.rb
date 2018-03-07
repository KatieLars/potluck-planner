class User < ApplicationRecord
  has_secure_password
  validates :email, uniqueness: true
  validates :email, presence: true
  validates :password, presence: true
  has_many :guestships, foreign_key: :guest_id
  has_many :potlucks #these are the potlucks the user hosts
  has_many :recipes
  has_many :friendships
  has_many :friends, through: :friendships
  has_many :potluck_recipes
  has_many :potluck_attendees

  def guest_potlucks #returns a list of potlucks where the person is a guest
    self.guestships.collect {|p| p.potluck}
  end

  def total_potlucks #returns a list of total potlucks
    self.guest_potlucks.push(self.potlucks).flatten
  end

  def total_recipes #all recipes from host and guest potlucks
    self.total_potlucks.collect {|r| r.recipes}.flatten
  end

  def self.not_friends #grabs all users who are NOT also friends
    where.not("id IN (?) OR id IN (?)", self.friends.pluck(:friend_id), self.all.pluck(:id))
    #grabs all friends of user
    #compares that to list of users

  end

end
