## Preparing

1. Download and install [Docker](https://www.docker.com/)
2. Go to app directory, copy .env.example to .env

## Running the app

```bash
$ docker build . -t rest-node
$ docker-compose up -d
```

## Services

* PhpMyAdmin – http://localhost:8095
  * Login: root
  * Password: password
* API - http://localhost:8096
* Swagger - http://localhost:8096/api/docs

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
