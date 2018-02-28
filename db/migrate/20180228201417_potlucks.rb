class Potlucks < ActiveRecord::Migration[5.1]
  def change
    create_table :potlucks do |t|

      t.timestamps
    end
  end
end
