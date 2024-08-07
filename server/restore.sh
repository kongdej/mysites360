#!/bin/bash

docker compose exec -T mongodb mongorestore -u kongdej -p gearman1 --authenticationDatabase admin dump/