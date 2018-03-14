class Guestship < ApplicationRecord
  belongs_to :potluck
  belongs_to :guest, :class_name => "User"

  def end_guestships
  end
end
