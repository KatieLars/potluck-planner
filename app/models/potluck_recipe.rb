class PotluckRecipe < ApplicationRecord
  belongs_to :potluck
  belongs_to :recipe
  belongs_to :user
end
