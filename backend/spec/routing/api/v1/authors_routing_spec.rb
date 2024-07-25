require 'rails_helper'

RSpec.describe Api::V1::AuthorsController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/api/v1/authors').to route_to('api/v1/authors#index')
    end

    it 'routes to #create' do
      expect(post: '/api/v1/authors').to route_to('api/v1/authors#create')
    end
  end
end
