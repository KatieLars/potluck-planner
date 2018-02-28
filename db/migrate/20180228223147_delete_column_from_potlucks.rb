class DeleteColumnFromPotlucks < ActiveRecord::Migration[5.1]
  def change
    remove_column :potlucks, :host_id
  end
end
