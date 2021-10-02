docker-build:
	docker build -t under-construction .

docker-run:
	docker run -p 80:80 --rm under-construction:latest