class UserSerializer < ActiveModel::Serializer
  attributes :id, :password, :email, :username, :image, :other_users, :total_potluck_recipes, :friends_with_friendships
  has_many :friendships
  has_many :friends, through: :friendships
  has_many :potlucks
  has_many :potluck_recipes
  has_many :recipes, through: :potluck_recipes
  has_many :guestships, foreign_key: :guest_id

  def other_users #grabs all users who are NOT also friends
    object.not_friends
  end

  def friends_and_friendships
    object.friends_with_friendships
  end

  def total_potluck_recipes #all recipes from all potlucks associated with user
    object.total_potluck_recipes
  end
  # def cooked_recipes
  #   object.list_potluck_recipes
  # end
  #
  # def new_recipes #created not cooked
  #   object.user_created_not_cooked
  # end
  #
  # def total_recipes #created and/or cooked
  #   object.total_user_recipes
  # end

end

# :new_recipes, :total_recipes, :cooked_recipes
