FROM node:16 as prebuild

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build


FROM nginx:latest

COPY ./conf/nginx.conf /etc/nginx/nginx.conf 

COPY --from=prebuild /app/dist /usr/share/nginx/html

EXPOSE 80