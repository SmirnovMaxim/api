FROM node:latest AS development
WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm i -g @nestjs/cli
RUN npm install

COPY . .

RUN npm run build

COPY . .

FROM node:latest AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=development /usr/src/app .

EXPOSE 8080

CMD ["node", "build/src/main"]
