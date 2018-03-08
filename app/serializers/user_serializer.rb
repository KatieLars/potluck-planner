class UserSerializer < ActiveModel::Serializer
  attributes :id, :password, :email, :username, :image, :other_users
  has_many :friendships
  has_many :friends, through: :friendships


  def other_users #grabs all users who are NOT also friends
    object.not_friends
  end
end
