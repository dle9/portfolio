# HTTPS server block
server {
    listen 443 ssl;
    server_name api.dericle.com www.api.dericle.com;

    ssl_certificate /etc/letsencrypt/live/api.dericle.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.dericle.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# HTTP server block for redirecting to HTTPS
server {
    listen 80;
    server_name api.dericle.com www.api.dericle.com;

    location / {
        return 301 https://$server_name$request_uri;
    }
}

