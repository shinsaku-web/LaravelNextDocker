# Laravel + Nextjs + Docker 環境

## Next.js インストール

```
docker-compose exec frontend npx create-next-app@latest --typescript .

# 開発用サーバー起動
docker-compose exec frontend yarn dev
```

## Laravel インストール

```
docker-compose exec backend composer create-project laravel/laravel .
```
