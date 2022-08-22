FROM node:14.18.1
WORKDIR /app

COPY package*.json /app
RUN npm install --registry=https://registry.npm.taobao.org

COPY . /app

EXPOSE 8000

CMD npm run start