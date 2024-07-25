Rails.application.config.redis = Redis.new(url: ENV.fetch('REDIS_URL', nil))
