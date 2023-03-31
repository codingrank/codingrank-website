
FROM node:lts

WORKDIR /app


COPY package.json ./
COPY yarn.lock ./

RUN yarn install


COPY . .

RUN yarn build


EXPOSE 3001


CMD [ "node", "./.output/server/index.mjs" ]