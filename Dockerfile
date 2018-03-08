FROM cypress/base:8

WORKDIR /home/node/app

COPY index.html dist cypress.json package.json yarn.lock ./

COPY cypress ./cypress

RUN yarn install

RUN export DEBUG='cypress:*'

RUN $(npm bin)/cypress run
