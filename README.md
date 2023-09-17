[![Deploy](https://github.com/SmirnovMaxim/api/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/SmirnovMaxim/api/actions/workflows/main.yml)

## Preparing

1. Download and install [Docker](https://www.docker.com/)
2. Go to app directory, copy .env.example to .env

## Running the app

```bash
$ docker-compose build
$ docker-compose up -d
```

## Services

* PhpMyAdmin – http://localhost:8095
  * Login: root
  * Password: password
* API - http://localhost
* Swagger - http://localhost/api/docs
