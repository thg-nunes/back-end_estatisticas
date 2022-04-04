FROM node:16.13.2

WORKDIR /src

COPY . /src/

RUN npm i --silent

EXPOSE 3333

CMD ["node", "server.js"]
