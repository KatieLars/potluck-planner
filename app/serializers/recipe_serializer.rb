class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :difficulty, :image, :user_id, :url, :cooked_recipes
  belongs_to :user
  has_many :potluck_recipes
  has_many :potlucks, through: :potluck_recipes

  def cooked_recipes_serial
    object.cooked_recipes
  end

end
