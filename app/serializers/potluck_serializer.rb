class PotluckSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :format_date, :format_time, :canceled, :image, :user_id, :potluck_recipes_claimed
  belongs_to :user
  has_many :guestships
  has_many :guests, through: :guestships
  has_many :potluck_recipes

  def format_date
    if object.date
      object.format_date
    end
  end

  def format_time
    if object.date
      object.format_time
    end
  end

  def potluck_recipes_claimed#returns an array of hashes {recipe: potluck_recipe.recipe, claimant_id: integer}
    if object.potluck_recipes
      object.format_recipes_with_claimant_id
    end
  end

end
