class CreateFamousQuotes < ActiveRecord::Migration[7.1]
  def change
    create_table :famous_quotes do |t|
      t.text :text, null: false
      t.references :quotable, polymorphic: true, null: false

      t.timestamps
    end
  end
end
