FROM node:18-alpine
MAINTAINER "vvbbnn00 <vvbbnn00@foxmail.com>"

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start"]