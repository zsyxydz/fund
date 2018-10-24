#!/bin/sh

VERSION=$2

PRO_TAG=www.stockpalm.com/fundrating/fundrating:${VERSION}

if [ $1 = "build" ]
then
    echo "docker build version: ${VERSION}"
    docker build -t ${PRO_TAG} .
fi

if [ $1 = "run" ]
then
    echo "docker run"
    docker run -d --name fundrating -p 8888:80 -e ENV=prod  www.stockpalm.com/fundrating/fundrating:0.0.1
fi

if [ $1 = "exec" ]
then
    echo "docker exec"
    docker exec -it litweb bash
fi

if [ $1 = "push" ]
then
    echo "docker push"
    docker push ${PRO_TAG}
fi
