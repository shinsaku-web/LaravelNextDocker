FROM php:8.1-fpm-alpine

COPY ./php.ini /usr/local/etc/php/conf.d/php.ini

COPY --from=composer:2.0 /usr/bin/composer /usr/bin/composer

RUN composer self-update && docker-php-ext-install pdo_mysql

WORKDIR /app