FROM node:8

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run spec:build
RUN npm run 

EXPOSE 8080

CMD ["npm", "start"]