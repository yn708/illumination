require 'rails_helper'

RSpec.describe Api::V1::FamousQuotesController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/api/v1/famous_quotes').to route_to('api/v1/famous_quotes#index')
    end

    it 'routes to #random' do
      expect(get: '/api/v1/famous_quotes/random').to route_to('api/v1/famous_quotes#random')
    end
  end
end
