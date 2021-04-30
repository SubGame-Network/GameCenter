#!/usr/bin/env bash

set -e

npm i

cp src/config/config.prod.json src/config/config.json
sed -i 's@NodeRPC@'${NodeRPC}'@' src/config/config.json

if [ ! -f ./build/index.html ]; then
    npm run build
fi