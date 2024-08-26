# mysites360
installation
- cd ./server
- docker compose up -d

Notes:
 - docker ps
 - docker start|stop|restart xxxx
 - docker rm $(docker ps -q)
 - docker images
 - docker rmi $(docker images -q)
 - docker exec -it xxxxx sh

Error Sharp:
 - docker ps
 - docker exec -it xxxx sh
 - npm install sharp
 - exit