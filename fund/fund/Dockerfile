FROM muninn/nginx-node-yarn
MAINTAINER zhouyi <zhouyi@stockpalm.com>
ADD . /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

EXPOSE 8081
#ENTRYPOINT ["yarn"]
#ENTRYPOINT ["yarn","build"]
ENTRYPOINT ["sh","prepare.sh"]