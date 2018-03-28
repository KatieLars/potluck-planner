class Recipe < ApplicationRecord
  has_many :potluck_recipes, :dependent => :delete_all
  has_many :potlucks, through: :potluck_recipes
  belongs_to :user


end
