class AddColumnToPotlucks < ActiveRecord::Migration[5.1]
  def change
    add_column :potlucks, :user_id, :integer
  end
end
