require 'rails_helper'

RSpec.describe Api::V1::AuthorsController, type: :controller do
  describe 'GET #index' do
    before do
      create_list(:author, 3) # 3つのAuthorを作成
      get :index
    end

    # 200 OK
    it 'returns a success response' do
      expect(response).to be_successful
    end

    # すべてのAuthorを返すか
    it 'returns all authors' do
      expect(response.parsed_body.size).to eq(3)
    end
  end

  describe 'POST #create' do
    let(:valid_attributes) do
      { name: 'Author Name', birth_year: 1900, death_year: 2000, profession: 'Writer' }
    end

    context 'with valid params' do
      it 'creates a new Author' do
        expect { post_create(valid_attributes) }.to change(Author, :count).by(1)
      end

      it 'renders a JSON response with the new author' do
        post_create(valid_attributes)

        expect_created_response
      end
    end

    # 無効なパラメータの場合
    context 'with invalid params' do
      let(:invalid_attributes) { { name: nil } }

      it 'renders a JSON response with errors for the new author' do
        post_create(invalid_attributes)
        expect_error_response
      end
    end

    # 共通のメソッド
    def post_create(attributes)
      post :create, params: { author: attributes }
    end

    def expect_created_response
      expect(response).to have_http_status(:created)
      expect(response.content_type).to eq('application/json; charset=utf-8')

      json_response = response.parsed_body
      expect(json_response['name']).to eq('Author Name')
      expect(json_response['birth_year']).to eq('1900')
      expect(json_response['death_year']).to eq('2000')
      expect(json_response['profession']).to eq('Writer')
    end

    def expect_error_response
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end
