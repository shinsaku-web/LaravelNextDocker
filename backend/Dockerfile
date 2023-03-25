FROM php:8.1-fpm-alpine

# 必要なパッケージのインストール
RUN apk --update --no-cache add \
    bash \
    oniguruma-dev \
    zlib-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    libzip-dev

# PHP拡張モジュールのインストール
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd zip opcache

# PHP設定ファイルのコピー
COPY ./php.ini /usr/local/etc/php/conf.d/php.ini

# Composerのインストール
COPY --from=composer:2.0 /usr/bin/composer /usr/bin/composer

# 作業ディレクトリの設定
WORKDIR /app
