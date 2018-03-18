class GuestshipSerializer < ActiveModel::Serializer
  attributes :id, :potluck_id, :guest_id, :rsvp
  belongs_to :potluck
  belongs_to :guest, :class_name => "User"
end
