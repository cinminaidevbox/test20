#!/bin/bash
cd "$(dirname "$0")"
python3 -m http.server 8001 &
BGPID=$!
firefox --no-remote http://localhost:8001 &
wait $BGPID
