FROM node:12.16.3
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
# install the packaes
RUN npm install
# copy all files
COPY . .

EXPOSE 8080

CMD ["node", "server.js"]