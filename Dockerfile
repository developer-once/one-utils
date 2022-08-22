FROM node:14.18.1
WORKDIR /app

COPY package*.json /app

COPY . /app

EXPOSE 8000

CMD npm run start