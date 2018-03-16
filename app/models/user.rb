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

  def list_potluck_recipes #user cooked only (but may have also created)
    self.potluck_recipes.collect {|potluck_recipe| potluck_recipe.recipe}
  end

  def total_user_recipes #recipes user created as well as cooked
    #this should be used as index
    (self.recipes + self.list_potluck_recipes).uniq
  end

  def user_created_not_cooked #recipes user created but did not cook
    self.recipes - self.list_potluck_recipes
  end

  def not_friends #grabs all users who are NOT also friends
    User.all.reject{|user| user.id == self.id} - self.friends
  end

  def friends_with_friendships
    friendships.collect do |friendship|
      {friendship: friendship.id, friend: User.find_by_id(friendship.friend_id)}
    end
  end

  def total_potluck_recipes #all recipes from all potlucks associated with user
    self.potlucks.collect do |potluck|
      potluck.recipes.collect {|recipe| recipe}
    end
  end

end
