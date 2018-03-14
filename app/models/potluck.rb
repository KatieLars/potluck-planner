class Potluck < ApplicationRecord#may need foreign keys specified
  belongs_to :user
  has_many :guestships
  has_many :guests, through: :guestships #people that are invited
  has_many :potluck_recipes
  has_many :recipes, through: :potluck_recipes
  has_many :potluck_attendees #people that are coming

  def format_date
    Date.parse(date).strftime("%A %B %e, %Y")
  end

  def format_time
    self.time.strftime("%l:%M %P")
  end

  def format_recipes_with_claimant_id #returns array of hashes for each recipe with claimant Id
    self.potluck_recipes.collect do |potluck_recipe|
      {recipe: potluck_recipe.recipe, claimant_id: potluck_recipe.user_id}
    end
  end
end
