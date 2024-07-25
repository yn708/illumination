## ビルドステージ
FROM ruby:3.3.4-alpine AS builder

# 言語とタイムゾーンの設定
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /app

RUN apk update && \
    apk add --no-cache\
    alpine-sdk \
    build-base \
    sqlite-dev \
    postgresql-dev \
    tzdata \
    git \
    gcompat

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN gem install bundler
RUN bundle install

##マルチステージビルド
FROM ruby:3.3.4-alpine

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

#本番環境用のRAILS_ENVを設定
ENV RAILS_ENV=production

RUN apk update && \
    apk add --no-cache\
    bash \
    sqlite-dev \
    postgresql-dev \
    tzdata \
    git \
    gcompat

WORKDIR /app

COPY --from=builder /usr/local/bundle /usr/local/bundle
COPY . /app

# コンテナ起動時に実行するスクリプト
COPY ./entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0", "-e", "production"]
