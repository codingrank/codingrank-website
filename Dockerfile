
FROM node:19-alpine3.16

WORKDIR /app


COPY package.json ./
COPY yarn.lock ./

RUN yarn global add pm2

RUN yarn install 

COPY . .

RUN yarn build


EXPOSE 3001


CMD ["pm2", "start"]