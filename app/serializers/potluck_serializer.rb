class PotluckSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description,
    :format_date, :format_time, :canceled, :image,
    :user_id, :not_potluck_recipes, :friends_to_invite,
    :potluck_recipes_claimed, :going_guests, :not_going_guests, :maybe_guests, :blank_guests
  belongs_to :user
  has_many :guestships
  has_many :guests, through: :guestships
  has_many :potluck_recipes
  has_many :recipes, through: :potluck_recipes

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

  def not_potluck_recipes
    object.other_recipes
  end

  def friends_to_invite
    object.friends_not_invited
  end

  def going_guests
    object.goings
  end

  def not_going_guests
    object.not_goings
  end

  def maybe_guests
    object.maybes
  end

  def blank_guests
    object.blanks
  end
end
