class UserSerializer < ActiveModel::Serializer
  attributes :id, :password, :email, :username, :image
  has_many :friendships
  has_many :friends, through: :friendships

  def not_friends #grabs all users who are NOT also friends
    User.all.reject{|user| user.id == object.id} - object.friends
  end
end
