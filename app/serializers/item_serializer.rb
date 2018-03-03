class UserSerializer < ActiveModel::Serializer
  attributes :id, :password, :email, :username, :image
end
