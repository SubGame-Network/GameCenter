#!/usr/bin/env bash

set -e

echo "frontend install ..."
npm i
echo "frontend install finish."

cp src/config/config.prod.json src/config/config.json
sed -i 's@NodeRPC@'${NodeRPC}'@' src/config/config.json

if [ ! -f ./build/index.html ]; then
    echo "frontend building ..."
    npm run build
    echo "frontend build finish."
fi
echo -e "\nAccess the UI via http://localhost\n"