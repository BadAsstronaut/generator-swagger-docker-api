FROM node:latest

# App directory
WORKDIR /usr/src/<%= appname %>

# Dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install

# Copy application
COPY . .

# Expose on 8080
EXPOSE 8080

#Start the server
CMD [ "npm", "start" ]