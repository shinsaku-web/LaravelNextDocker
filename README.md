# Laravel + Nextjs + Docker 環境

## 動作環境

- php8.1
- Laravel10
- Node18
- next13

## 準備

- .env をルート配下に作成。env.example 参考。

## コンテナ起動

```
docker-compose up -d
```

## Next.js インストール

```
docker-compose exec frontend bash
npx create-next-app@latest --typescript .

# 開発用サーバー起動
docker-compose exec frontend npm run dev

```

## Laravel インストール

```
docker-compose exec backend bash
composer create-project laravel/laravel .
```

インストール後、mysql の環境変数をルートディレクトリの.env に指定した内容と合わせる。
DB_HOST、DB_DATABASE、DB_USERNAME、DB_PASSWORD を変更。

## mysql ログイン

```
docker-compose exec database bash
mysql -u root -p
```


## コンテナ停止

```
docker-compose down
```
