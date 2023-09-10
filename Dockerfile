FROM node:latest AS development
WORKDIR /usr/src/app

COPY ./app/package*.json ./

RUN npm install

COPY ./app .

RUN npm run build

FROM node:latest AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=development /usr/src/app .

EXPOSE 8080

CMD ["node", "dist/main"]

