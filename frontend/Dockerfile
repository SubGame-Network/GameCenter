FROM node:12.16.2

ENV TZ=Asia/Taipei

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update && apt-get -y upgrade && apt-get install -y \
    apt-utils \
    supervisor \
    net-tools \
    vim

RUN mkdir -p /var/www/html/microService \
    && mkdir -p /var/log/supervisor \
    && mkdir -p /var/log/ServiceLog

WORKDIR /var/www/html/microService

EXPOSE 80
