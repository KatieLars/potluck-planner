class PotluckRecipe < ApplicationRecord
  belongs_to :potluck
  belongs_to :recipe
end
