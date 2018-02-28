class Guestship < ApplicationRecord
  belongs_to :potluck
  belongs_to :guest, class_name: :user, foreign_key: :user_id
end
