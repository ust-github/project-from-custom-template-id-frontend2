FROM nginx:alpine
COPY ./dist/project_from_custom_template_id/ /usr/share/nginx/html
