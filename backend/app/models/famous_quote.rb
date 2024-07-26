class FamousQuote < ApplicationRecord
  belongs_to :quotable, polymorphic: true

  validates :text, presence: true
  validates :quotable_type, presence: true
end
