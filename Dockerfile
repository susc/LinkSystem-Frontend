FROM node:latest

LABEL maintainer="szuzsc@live.com"

ENV TZ=Asia/Shanghai

WORKDIR /LinkSystem-Frontend

ADD . /LinkSystem-Frontend

RUN npm i

RUN npm run build

# 服务端口
EXPOSE 8000

ENTRYPOINT npm run start