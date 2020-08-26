FROM node:latest

LABEL maintainer="szuzsc@live.com"

# 设置正确的时区
ENV TZ=Asia/Shanghai

RUN git clone https://github.com.cnpmjs.org/susc/LinkSystem-Frontend.git
