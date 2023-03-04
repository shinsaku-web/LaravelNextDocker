# Laravel + Nextjs + Docker 環境

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
