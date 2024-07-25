class CreateAuthors < ActiveRecord::Migration[7.1]
  def change
    create_table :authors do |t|
      t.string :name, null: false
      t.string :birth_year
      t.string :death_year
      t.string :profession

      t.timestamps
    end
  end
end
