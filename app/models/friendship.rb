class Friendship < ApplicationRecord
  belongs_to :user
  belongs_to :friend, classname :user
end
