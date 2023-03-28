FROM node:16.19-alpine as base
RUN mkdir /app

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]