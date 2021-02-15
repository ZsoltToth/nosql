#!/usr/bin/env bash

REDIS_CONTAINER_NAME=redis
REDIS_NETWORK=redis-network
HOST_REDIS_PORT=6379
REDIS_PORT=6379

docker run \
	--rm \
	--name $REDIS_CONTAINER_NAME \
	--publish $HOST_REDIS_PORT:$REDIS_PORT \
       	redis
