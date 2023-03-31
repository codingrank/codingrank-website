
FROM node:19-alpine3.16

WORKDIR /app


COPY package.json ./
COPY yarn.lock ./

RUN yarn install 

COPY . .

RUN yarn build


EXPOSE 3001


CMD ["yarn", "run", "preview"]