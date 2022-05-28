FROM node:16.15.0

WORKDIR /src

COPY . /src/

RUN npm i --silent

EXPOSE 3333

CMD ["node", "server.js"]
