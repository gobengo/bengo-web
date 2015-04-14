FROM ubuntu
MAINTAINER bengo

RUN apt-get update
RUN apt-get install -y nodejs npm

COPY . /app
WORKDIR /app

RUN npm install

EXPOSE 80
EXPOSE 443

ENV DEBUG *
CMD ["nodejs", "/app/index.js"]
