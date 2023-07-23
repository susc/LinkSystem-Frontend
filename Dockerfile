FROM node:lts-alpine

LABEL maintainer="szuzsc@live.com"

ENV TZ=Asia/Shanghai

WORKDIR /LinkSystem-Frontend

ADD . .

RUN npm i

RUN npm run build

# 服务端口
EXPOSE 3000

ENTRYPOINT npm run preview