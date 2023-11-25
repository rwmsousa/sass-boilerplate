APPLICATION_NAME="sass-boilerplate"
CONTAINER_NAME="sass-boilerplate-container"
FREE_PORT=$(shell bash -c 'for port in $$(seq 3000 4000); do echo -ne "\035" | telnet 127.0.0.1 $$port > /dev/null 2>&1; if [ $$? -eq 1 ]; then echo $$port; break; fi; done')

build:
	docker-compose build

up:
	docker-compose up

up-d:
	docker-compose up -d

exec:
	docker exec -it $(CONTAINER_NAME) sh

delete:
	docker rm -f $(CONTAINER_NAME)

start:
	docker run -it --rm --name $(CONTAINER_NAME) -v ${PWD}:/app -p $(FREE_PORT):3000 $(APPLICATION_NAME) /bin/sh -c "npm run build && npm start"

stop:
	docker stop $(CONTAINER_NAME)