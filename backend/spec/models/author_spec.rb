require 'rails_helper'

RSpec.describe Author, type: :model do
  # バリデーションのテスト
  it 'is valid with valid attributes' do
    expect(build(:author)).to be_valid
  end

  it 'is not valid without a name' do
    expect(build(:author, name: nil)).not_to be_valid
  end

  # 関連付けのテスト
  context 'when having famous quotes' do
    it 'can have many famous quotes' do
      author = create(:author)
      famous_quote1 = create(:famous_quote, quotable: author)
      famous_quote2 = create(:famous_quote, quotable: author)

      expect(author.famous_quotes).to include(famous_quote1, famous_quote2)
    end

    it 'destroys associated famous quotes when destroyed' do
      author = create(:author)
      create(:famous_quote, quotable: author)

      expect { author.destroy }.to change(FamousQuote, :count).by(-1)
    end
  end
end
