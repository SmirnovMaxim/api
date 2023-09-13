start:
	docker-compose up -d
stop:
	docker-compose stop
down:
	docker-compose down
#build:
#	docker build . -t rest-node

build:
	docker-compose build

rebuild: build start

restart: down start
