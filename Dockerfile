FROM node:lts

RUN mkdir /theinfinitytimes
COPY ./package.json /theinfinitytimes
WORKDIR theinfinitytimes

RUN npm install

COPY . /theinfinitytimes
WORKDIR /theinfinitytimes

RUN npm run build

CMD npm start
