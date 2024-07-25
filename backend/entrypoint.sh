#!/bin/bash
set -e

rm -f /app/tmp/pids/server.pid

# データベースのマイグレーションを実行
bundle exec rails db:migrate

# 初期データを投入
bundle exec rails db:seed_fu

exec "$@"