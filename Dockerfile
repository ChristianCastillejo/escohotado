FROM node:8

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
ENV PYTHON=/usr/bin/python
RUN yarn

WORKDIR /app
ADD . /app

EXPOSE 3000
EXPOSE 3000

CMD ["yarn", "start"]