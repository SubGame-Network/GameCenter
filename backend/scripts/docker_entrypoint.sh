#!/usr/bin/env bash

set -e

cp config/config.dev.yml config/config.yml
sed -i 's@NodeRPC@'${NodeRPC}'@' config/config.yml

go run cmd/migrate/gorm/migration/main.go

go build cmd/gin/main.go

./main