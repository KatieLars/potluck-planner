class User < ApplicationRecord
  has_many :potlucks, through: :guestships
  has_many :recipes, through: :potlucks
  has_many :friendships
  has_many :friends,through: :frienships
end
