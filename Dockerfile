FROM node:latest

LABEL maintainer="szuzsc@live.com"

# 设置正确的时区
ENV TZ=Asia/Shanghai

RUN git clone https://github.com.cnpmjs.org/susc/LinkSystem-Frontend.git
WORKDIR /LinkSystem-Frontend

# npm更换为淘宝源
RUN npm config set registry https://registry.npm.taobao.org
RUN npm i
RUN npm run build

# 服务端口
EXPOSE 8000

ENTRYPOINT npm run start