class PotluckRecipe < ApplicationRecord
  belongs_to :potluck
  belongs_to :recipe
  has_one :user
end
