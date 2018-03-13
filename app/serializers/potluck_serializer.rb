class PotluckSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :format_date, :format_time, :canceled, :image, :user_id
  belongs_to :user

  def format_date
    if object.date
      object.format_date
    end
  end

  def format_time
    if object.date
      object.format_time
    end
  end
end
