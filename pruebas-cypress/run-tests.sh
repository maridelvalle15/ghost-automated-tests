#!/bin/bash
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2368,EMAIL=j.guataquira@uniandes.edu.co,PASSWORD=Uniandespili77,GHOST_VERSION=reference
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2369,EMAIL=j.guataquira@uniandes.edu.co,PASSWORD=Uniandespili77,GHOST_VERSION=test