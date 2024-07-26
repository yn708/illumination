class Author < ApplicationRecord
  has_many :famous_quotes, as: :quotable, dependent: :destroy

  validates :name, presence: true
end
