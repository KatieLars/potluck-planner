class PotluckSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :date, :time, :canceled, :image, :user_id
  belongs_to :user
end
