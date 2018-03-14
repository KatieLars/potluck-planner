class UserSerializer < ActiveModel::Serializer
  attributes :id, :password, :email, :username, :image, :other_users, :friends_with_friendships
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

end
