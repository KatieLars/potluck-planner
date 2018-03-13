class RemoveColumnHappeningFromPotluckTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :potlucks, :happening
  end
end
