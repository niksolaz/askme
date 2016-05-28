#!/bin/sh
export PORT=3000 \
export HOSTNAME="localhost" \
export DEBUG="*" \
export NODE_ENV="production" \
export API_URL="http://localhost:4000/api/v1"

npm run build && npm start
