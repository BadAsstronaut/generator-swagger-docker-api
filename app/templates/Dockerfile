FROM node:alpine

RUN mkdir -p /opt/<%= company %>/<%= appname %>
WORKDIR /opt/<%= company %>/<%= appname %>

COPY package.json .

RUN npm install

COPY . .

RUN npm run spec:build
RUN npm run 

EXPOSE 8080

CMD ["npm", "start"]