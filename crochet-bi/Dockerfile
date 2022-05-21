FROM node:12-alpine3.12 AS build
WORKDIR C:\Users\patoa\Documents\Escuela\Kubernetes-docker-minikube
COPY package.json ./
RUN npm install
COPY . .
CMD ['npm', 'start']