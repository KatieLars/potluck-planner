class UserSerializer < ActiveModel::Serializer
  attributes :id, :password, :email, :username, :image, :other_users, :friends_with_friendships. :new_recipes, :cooked_recipes
  has_many :friendships
  has_many :friends, through: :friendships
  has_many :potlucks
  has_many :potluck_recipes
  has_many :recipes, through: :potluck_recipes

  def other_users #grabs all users who are NOT also friends
    object.not_friends
  end

  def friends_and_friendships
    object.friends_with_friendships
  end

  def cooked_recipes
    object.list_potluck_recipes
  end

  def new_recipes #created not cooked
    object.user_created_not_cooked
  end

end
