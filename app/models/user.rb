class User < ApplicationRecord
  has_secure_password
  has_many :guestships, foreign_key: :guest_id
  has_many :potlucks, through: :guestships
  has_many :recipes, through: :potlucks
  has_many :friendships
  has_many :friends,through: :frienships
end
