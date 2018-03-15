class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :difficulty, :image, :user_id, :url, :new_recipes, :total_recipes, :cooked_recipes
  belongs_to :user
  has_many :potluck_recipes
  has_many :potlucks, through: :potluck_recipes

  def cooked_recipes
    current_user.list_potluck_recipes
  end

  def new_recipes #created not cooked
    current_user.user_created_not_cooked
  end

  def total_recipes #created and/or cooked
    current_user.total_user_recipes
  end

end
