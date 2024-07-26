require 'rails_helper'

RSpec.describe FamousQuote, type: :model do
  let(:author) { create(:author) }
  let(:famous_quote) { build(:famous_quote, quotable: author) }

  # バリデーションのテスト
  it 'is valid with valid attributes' do
    expect(build(:famous_quote)).to be_valid
  end

  it 'is not valid without text' do
    expect(build(:famous_quote, text: nil)).not_to be_valid
  end

  it 'is not valid without quotable_type' do
    expect(build(:famous_quote, quotable_type: nil)).not_to be_valid
  end

  it 'is not valid without quotable_id' do
    expect(build(:famous_quote, quotable_id: nil)).not_to be_valid
  end

  # ポリモーフィック関連付けのテスト
  describe 'association with author' do
    it 'is valid with an associated author' do
      expect(famous_quote).to be_valid
    end

    it 'returns the correct quotable for an associated author' do
      expect(famous_quote.quotable).to eq(author)
    end
  end
end
