FactoryBot.define do
  factory :famous_quote do
    text { 'This is a famous quote.' }
    quotable_type { 'Author' }
    quotable_id { create(:author).id }
  end
end
