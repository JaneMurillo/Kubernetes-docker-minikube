FROM node:12-alpine3.12 AS build
WORKDIR C:\Users\patoa\Desktop\system
COPY package.json ./
RUN npm install
COPY . .
CMD npm start
RUN npm run build