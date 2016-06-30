FROM node:6.2.2
MAINTAINER bengo

COPY . /app
WORKDIR /app

# Fix for "EXDEV: cross-device link not permitted", see https://github.com/npm/npm/issues/9863
RUN cd $(npm root -g)/npm && \
  npm install fs-extra && \
  sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs.move/ ./lib/utils/rename.js

RUN npm install

EXPOSE 80
EXPOSE 443

ENV DEBUG *
CMD ["node", "/app/index.js"]

