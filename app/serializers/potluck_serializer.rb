class PotluckSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :happening, :image, :user_id
  belong_to :user
end
