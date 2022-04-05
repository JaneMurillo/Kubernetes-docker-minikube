FROM node:alpine
WORKDIR C:\Users\patoa\Desktop\system
COPY package.json .
RUN npm install
COPY . .
CMD ['npm', 'start']