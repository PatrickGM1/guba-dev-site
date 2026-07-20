FROM nginx:alpine

COPY public_html /usr/share/nginx/html
COPY blog_html /usr/share/nginx/html/blog
COPY projects_html /usr/share/nginx/html/projects
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
