require 'rails_helper'
require 'mock_redis'

RSpec.describe Api::V1::FamousQuotesController, type: :controller do
  let!(:famous_quote) { create(:famous_quote) }
  let(:redis) { MockRedis.new }

  before do
    allow(Rails.application.config).to receive(:redis).and_return(redis)
  end

  describe 'GET #index' do
    it 'returns a successful response' do
      get :index
      expect_successful_response
    end

    it 'returns all famous quotes' do
      get :index
      expect_all_famous_quotes
    end
  end

  describe 'GET #random' do
    context 'when quote is cached' do
      before do
        cache_quote
      end

      it 'returns the cached quote' do
        get :random
        expect_cached_quote
      end
    end

    context 'when quote is not cached' do
      it 'returns a new random quote and caches it' do
        get :random
        expect_new_random_quote_cached
      end
    end

    context 'when quote is not found' do
      before do
        allow(FamousQuote).to receive(:includes).and_return(FamousQuote.none)
      end

      it 'returns an error' do
        get :random
        expect_quote_not_found_error
      end
    end
  end

  # 共通のメソッド
  def expect_successful_response
    expect(response).to have_http_status(:ok)
  end

  def expect_all_famous_quotes
    json = response.parsed_body
    expect(json.length).to eq(FamousQuote.count)
    expect(json.first).to have_key('quotable')
  end

  def cache_quote
    redis.set("daily_random_quote_#{Time.zone.today}", famous_quote.to_json)
  end

  def expect_cached_quote
    expect_successful_response
    json = response.parsed_body
    expect(json['id']).to eq(famous_quote.id)
    expect(json).to have_key('cached_at')
  end

  def expect_new_random_quote_cached
    expect_successful_response
    json = response.parsed_body
    expect(json['id']).to eq(FamousQuote.first.id)
    expect(redis.get("daily_random_quote_#{Time.zone.today}")).to be_present
    expect(json).to have_key('cached_at')
  end

  def expect_quote_not_found_error
    expect(response).to have_http_status(:not_found)
    json = response.parsed_body
    expect(json['error']).to eq('見つかりませんでした。')
  end
end
