# HTTPS server block
server {
    listen 443 ssl;
    server_name dericle.com www.dericle.com;
    root /var/www/dericle.com;
    index index.html;

    ssl_certificate /etc/letsencrypt/live/dericle.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/dericle.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        try_files $uri /index.html;
    }

    location /about/ {
	root /var/www/dericle.com;
    }

    location /work/ {
	root /var/www/dericle.com;
    }
}

# HTTP server block for redirecting to HTTPS
server {
    listen 80;
    server_name dericle.com www.dericle.com;

    location / {
        return 301 https://$server_name$request_uri;
    }
}

