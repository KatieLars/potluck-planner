class PotluckSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :happening, :image, :user_id
end
