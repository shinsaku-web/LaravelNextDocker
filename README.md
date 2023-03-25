# Laravel + Nextjs + Docker 環境

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

## コンテナ停止

```
docker-compose down
```
