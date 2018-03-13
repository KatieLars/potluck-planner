class AddColumnDateToPotlucks < ActiveRecord::Migration[5.1]
  def change
    add_column :potlucks, :date, :datetime
  end
end
