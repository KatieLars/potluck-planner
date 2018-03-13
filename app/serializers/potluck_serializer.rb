class PotluckSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :format_date, :format_time, :canceled, :image, :user_id
  belongs_to :user

  def format_date
    object.date.strftime("%A %B %e, %Y")
  end

  def format_time
    object.time.strftime("%l:%M %P")
  end
end
