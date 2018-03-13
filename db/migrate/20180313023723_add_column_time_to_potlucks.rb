class AddColumnTimeToPotlucks < ActiveRecord::Migration[5.1]
  def change
    add_column :potlucks, :time, :datetime
  end
end
