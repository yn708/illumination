module Api
  module V1
    class FamousQuotesController < ApplicationController
      before_action :set_random_famous_quote, only: [:random]
      # before_action :set_famous_quote, only: [:destroy]

      def index
        @famous_quotes = FamousQuote.includes(:quotable)
        render json: @famous_quotes.as_json(include: :quotable), status: :ok
      end

      # ランダムな名言
      def random
        if @famous_quote # 名言が見つかった場合、JSONで返す（キャッシュされた時間も含む）
          render json: @famous_quote.as_json(include: :quotable).merge(cached_at: Time.current),
                 status: :ok
        else # 名言が見つからなかった場合、エラーを返す
          render json: { error: '見つかりませんでした。' }, status: :not_found
        end
      end

      private

        # 深夜0時にリセットされるランダムな名言を取得するメソッド
        def set_random_famous_quote
          redis = Rails.application.config.redis # Redisクライアントを取得
          return handle_random_quote_without_redis if redis.nil? # Redisが利用できない場合は、代替メソッドを使用

          # 今日の日付をキーとしてキャッシュを検索
          cache_key = "daily_random_quote_#{Time.zone.today}" # 今日の日付をキーに設定
          cached_quote = redis.get(cache_key) # キャッシュを取得

          # キャッシュが存在する場合、そのIDを使って名言を取得
          if cached_quote.present?
            cached_quote_data = begin
              JSON.parse(cached_quote)
            rescue StandardError
              nil
            end
            if cached_quote_data
              # キャッシュされたJSONデータから名言のIDを取り出してから、名言を取得
              @famous_quote = FamousQuote.find_by(id: cached_quote_data['id'])
            end
          end

          # キャッシュがない、または無効な場合、新しいランダムな名言を取得
          return unless @famous_quote.nil?

          @famous_quote = FamousQuote.includes(:quotable).order('RANDOM()').first
          cache_new_quote(redis, cache_key, @famous_quote) if @famous_quote.present? # 新しい名言をキャッシュ
        end

        # 新しい名言をキャッシュするメソッド
        def cache_new_quote(redis, cache_key, quote)
          redis.set(cache_key, quote.to_json) # 名言をJSONとしてキャッシュ
          tomorrow = Date.tomorrow.to_time # 次の日の0時を計算
          seconds_until_midnight = (tomorrow - Time.zone.now).to_i # 0時までの秒数を計算
          redis.expire(cache_key, seconds_until_midnight) # キャッシュの有効期限を0時までに設定
        end

        # Redisが利用できない場合のメソッド
        def handle_random_quote_without_redis
          # データベースから直接ランダムな名言を取得
          @famous_quote = FamousQuote.includes(:quotable).order('RANDOM()').first
        end

      # def set_famous_quote
      #   @famous_quote = FamousQuote.find(params[:id])
      #   return if @famous_quote
      #   render json: { error: '見つかりませんでした。' }, status: :not_found
      # end

      # def famous_quotes_params
      #   params.require(:famous_quote).permit(:text, :quotable_type, :quotable_id)
      # end
    end
  end
end
