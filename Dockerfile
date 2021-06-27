FROM node:lts as builder

RUN mkdir /theinfinitytimes
WORKDIR /theinfinitytimes
COPY ./package.json ./package-lock.json ./

RUN npm ci

COPY . /theinfinitytimes
WORKDIR /theinfinitytimes

RUN npm run build

FROM nginx:stable-alpine AS production
COPY --from=builder /theinfinitytimes/dist/theinfinitytimes/ /usr/share/nginx/html

EXPOSE 80