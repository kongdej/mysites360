FROM node:22-alpine

WORKDIR /mysites

COPY . .

RUN npm install

RUN npm install -g nodemon

RUN npm rebuild --verbose sharp

CMD npm start
