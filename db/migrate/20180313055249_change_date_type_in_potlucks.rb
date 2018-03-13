class ChangeDateTypeInPotlucks < ActiveRecord::Migration[5.1]
  def change
    change_column :potlucks, :date, :string
  end
end
