class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :difficulty, :image, :user_id, :url
  belongs_to :user
  has_many :potluck_recipes
  has_many :potlucks, through: :potluck_recipes

end
