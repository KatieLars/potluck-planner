class UserSerializer < ActiveModel::Serializer
  attributes :id, :password, :email, :username, :image
  has_many :friends

  def not_friends #grabs all users who are NOT also friends
    User.all.reject{|user| user.id == object.id} - object.friends
  end
end
