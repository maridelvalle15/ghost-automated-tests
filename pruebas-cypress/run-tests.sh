#!/bin/bash
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2370,EMAIL=marisela.delvalle93@gmail.com,PASSWORD=12345678910,GHOST_VERSION=reference
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2372,EMAIL=marisela.delvalle93@gmail.com,PASSWORD=12345678910,GHOST_VERSION=test