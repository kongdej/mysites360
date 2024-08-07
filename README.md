# mysites360
installation
- install docker
- Modified .env file
- create images
  > docker compose up -d
  > chmod +x restore.sh


  docker exec -it -t mysites360-mongodb-1  bash
# Run Front-end

  /app/quasar dev

# Run Server 

  /app/docker compose up -d

# Production Deploy
  1. modify /server/.env
    
    STAGE = "prod"
    DBURL = "mongodb://kongdej:gearman1@localhost:27017/admin"
    FULLPATH = '/home/mysites/mysites360/public/images'
    FULLPATHPHOTO = '/home/mysites/mysites360/public/photos'
    AVATARPATH = '/home/mysites/mysites360/public/avatars'
    COMMENTPATH = '/home/mysites/mysites360/public/comments'
    HRAPI = "eyJ0eXAi xxxxx ..."

  2. modify /app/.env

   VUE_APP_API_URL_PROD = https://mysites.egat.co.th
  
  3. build app
      
      /app/quasar build
  
  4. copy build files to public folder
  
      yes | cp -Ri ./dist/spa/* ../server/public 

  5. Create Docker image 
     - delete all docker images and container
        
        docker stop $(docker ps -aq) && docker rm $(docker ps -aq)
     
     - create images and containers
      
      cd /server
      docker compose down && docker rmi $(docker images -q) && docker compose up -d

  Docker command 
    docker ps
    docker images
    docker compose up -d
    docker compose down
    docker rmi xxxxx
    docker rm xxxxx

# Backup db

mongodump -u kongdej -p gearman1 --authenticationDatabase admin -d mysites360 -o dump

# Restore db

mongorestore -u kongdej -p gearman1 --authenticationDatabase admin -d mysites360 dump


# flow 
cd src/
index.html
App.vue 
  -> boot (quasar.config.js)
    - config <- .env
    - axios -> api
  -> store/myStore.js

  -> router/routes.js
    - / -> pages/HomePage.vue
    - /:site -> 
      - layout/SiteLayout.vue
        - pages/IndexPage.vue -> component/PhotoSphere.vue
        - pages/WeatherPage.vue

        
    - /login -> pages/LoginPage.vue
