class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :difficulty, :image, :user_id, :url
  belongs_to :user

end
