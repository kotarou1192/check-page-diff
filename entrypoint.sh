#!/bin/sh

set -e

npm run test

echo "open: http://localhost:3000/.reg/index.html"
npm run show-diff
