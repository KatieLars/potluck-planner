class ChangePotlucksHostColumnName < ActiveRecord::Migration[5.1]
  def change
    remove_column :potlucks, :host_id
    add_column :potlucks, :user_id, :integer

  end
end
