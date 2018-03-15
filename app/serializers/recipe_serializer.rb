class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :difficulty, :image, :user_id, :url, :new_recipes, :total_recipes, :cooked_recipes
  belongs_to :user
  has_many :potluck_recipes
  has_many :potlucks, through: :potluck_recipes

end
