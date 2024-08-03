docker/build:
	docker build --platform=linux/amd64 -t autobots-app .

docker/run:
	docker run --platform=linux/amd64 -p 8888:80 autobots-app