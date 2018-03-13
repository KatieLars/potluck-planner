class AddColumnCanceledToPotlucks < ActiveRecord::Migration[5.1]
  def change
    add_column :potlucks, :canceled, :boolean, :default => false
  end
end
