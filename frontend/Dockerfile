
FROM node:21.7.3

WORKDIR /app

# npmのバージョンを最新にし、bunをインストール
RUN npm install -g npm@latest
RUN npm install -g bun

COPY package.json bun.lockb /app/
RUN bun install

COPY . /app

EXPOSE 4000

CMD ["bun", "dev", "-p", "4000"]
