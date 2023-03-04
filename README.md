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
docker-compose exec frontend sh
npx create-next-app@latest --typescript .
npm run dev
```

## Laravel インストール

```
docker-compose exec backend sh
composer create-project laravel/laravel .
```

## コンテナ停止

```
docker-compose down
```
