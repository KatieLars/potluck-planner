class RemoveHostColumnFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :host
  end
end
