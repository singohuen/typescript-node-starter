FROM node:12.8.1-alpine AS appbuild

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json
RUN yarn build


FROM node:12.8.1-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production

COPY --from=appbuild /usr/src/app/build ./build

EXPOSE 8000
CMD ["yarn", "start:prod"]
