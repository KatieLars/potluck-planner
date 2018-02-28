class Guestship < ApplicationRecord
  belongs_to :potluck
  belongs_to :guest, classname :user
end
