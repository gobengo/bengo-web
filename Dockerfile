FROM ubuntu
MAINTAINER bengo

RUN apt-get update
RUN apt-get install -y nodejs npm

COPY . /bengo-web
WORKDIR /bengo-web

RUN npm install

EXPOSE 80

ENV DEBUG *
CMD ["nodejs", "/bengo-web/index.js"]
