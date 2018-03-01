class User < ApplicationRecord
  has_secure_password
  has_many :guestships, foreign_key: :guest_id
  has_many :potlucks
  has_many :guest_potlucks, through: :guestships, source: :potlucks, foreign_key: :potluck_id
  has_many :recipes, through: :potlucks
  has_many :friendships
  has_many :friends, through: :friendships
end
