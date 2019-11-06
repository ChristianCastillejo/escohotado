FROM node:8

ADD yarn.lock /escohotado-client/yarn.lock
ADD package.json /escohotado-client/package.json

ENV NODE_PATH=/escohotado-client/node_modules
ENV PATH=$PATH:/escohotado-client/node_modules/.bin
ENV PYTHON=/usr/bin/python
RUN yarn install --force

WORKDIR /escohotado-client/app
ADD . /escohotado-client/app

EXPOSE 3000
EXPOSE 3000

CMD ["yarn", "start"]