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

  def other_recipes
    Recipe.all - self.recipes
  end

  def friends_not_invited #list of user's friends not invited to a particular potluck
    self.user.friends - self.guests
  end

  def goings #returns a list of all guests going
    self.guestships.collect{|guestship| guestship.guest if guestship.rsvp == "Going"}
  end

  def maybes #returns a list of all guests maybe
    self.guestships.collect{|guestship| guestship.guest if guestship.rsvp == "Maybe"}
  end

  def not_goings #returns a list of all guests not ging
    self.guestships.collect {|guestship| guestship.guest if guestship.rsvp == "Not Going"}
  end

  def blanks #returns a list of all guests not yet responded
    self.guestships.collect{|guestship| guestship.guest if guestship.rsvp == ""}
  end

end
