#!/bin/sh
set -e
echo ">>> [DEBUG] Valeur de \$PORT injectée par Railway : ${PORT}"
echo ">>> Injection du port dans la config Nginx..."
envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

echo ">>> Démarrage de Nginx..."
exec nginx -g "daemon off;"