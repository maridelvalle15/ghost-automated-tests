#!/bin/bash
rm -rf vrt_screenshots
rm -rf vrt_report/vrt_screenshots

mkdir vrt_screenshots
mkdir vrt_screenshots/examples

# F01
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2372,EMAIL=marisela.delvalle93@gmail.com,PASSWORD=12345678910,GHOST_VERSION=reference,VRT=true --spec cypress/integration/examples/ghost_F01_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F01_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F01_testing.spec.js/bitmaps_reference
cp cypress/screenshots/examples/ghost_F01_testing.spec.js/bitmaps_reference/* vrt_screenshots/examples/ghost_F01_testing.spec.js/bitmaps_reference/
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2370,EMAIL=marisela.delvalle93@gmail.com,PASSWORD=12345678910,GHOST_VERSION=test,VRT=true --spec cypress/integration/examples/ghost_F01_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F01_testing.spec.js/bitmaps_test
cp cypress/screenshots/examples/ghost_F01_testing.spec.js/bitmaps_test/* vrt_screenshots/examples/ghost_F01_testing.spec.js/bitmaps_test/

# F03
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2372,EMAIL=marisela.delvalle93@gmail.com,PASSWORD=12345678910,GHOST_VERSION=reference,VRT=true --spec cypress/integration/examples/ghost_F03_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F03_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F03_testing.spec.js/bitmaps_reference
cp cypress/screenshots/examples/ghost_F03_testing.spec.js/bitmaps_reference/* vrt_screenshots/examples/ghost_F03_testing.spec.js/bitmaps_reference/
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2370,EMAIL=marisela.delvalle93@gmail.com,PASSWORD=12345678910,GHOST_VERSION=test,VRT=true --spec cypress/integration/examples/ghost_F03_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F03_testing.spec.js/bitmaps_test
cp cypress/screenshots/examples/ghost_F03_testing.spec.js/bitmaps_test/* vrt_screenshots/examples/ghost_F03_testing.spec.js/bitmaps_test/

# F04
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2372,EMAIL=marisela.delvalle93@gmail.com,PASSWORD=12345678910,GHOST_VERSION=reference,VRT=true --spec cypress/integration/examples/ghost_F04_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F04_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F04_testing.spec.js/bitmaps_reference
cp cypress/screenshots/examples/ghost_F04_testing.spec.js/bitmaps_reference/* vrt_screenshots/examples/ghost_F04_testing.spec.js/bitmaps_reference/
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2370,EMAIL=marisela.delvalle93@gmail.com,PASSWORD=12345678910,GHOST_VERSION=test,VRT=true --spec cypress/integration/examples/ghost_F04_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F04_testing.spec.js/bitmaps_test
cp cypress/screenshots/examples/ghost_F04_testing.spec.js/bitmaps_test/* vrt_screenshots/examples/ghost_F04_testing.spec.js/bitmaps_test/

# F05
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2372,EMAIL=marisela.delvalle93@gmail.com,PASSWORD=12345678910,GHOST_VERSION=reference,VRT=true --spec cypress/integration/examples/ghost_F05_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F05_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F05_testing.spec.js/bitmaps_reference
cp cypress/screenshots/examples/ghost_F05_testing.spec.js/bitmaps_reference/* vrt_screenshots/examples/ghost_F05_testing.spec.js/bitmaps_reference/
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2370,EMAIL=marisela.delvalle93@gmail.com,PASSWORD=12345678910,GHOST_VERSION=test,VRT=true --spec cypress/integration/examples/ghost_F05_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F05_testing.spec.js/bitmaps_test
cp cypress/screenshots/examples/ghost_F05_testing.spec.js/bitmaps_test/* vrt_screenshots/examples/ghost_F05_testing.spec.js/bitmaps_test/

# F06
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2372,EMAIL=marisela.delvalle93@gmail.com,PASSWORD=12345678910,GHOST_VERSION=reference,VRT=true --spec cypress/integration/examples/ghost_F06_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F06_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F06_testing.spec.js/bitmaps_reference
cp cypress/screenshots/examples/ghost_F06_testing.spec.js/bitmaps_reference/* vrt_screenshots/examples/ghost_F06_testing.spec.js/bitmaps_reference/
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2370,EMAIL=marisela.delvalle93@gmail.com,PASSWORD=12345678910,GHOST_VERSION=test,VRT=true --spec cypress/integration/examples/ghost_F06_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F06_testing.spec.js/bitmaps_test
cp cypress/screenshots/examples/ghost_F06_testing.spec.js/bitmaps_test/* vrt_screenshots/examples/ghost_F06_testing.spec.js/bitmaps_test/

# F07
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2372,EMAIL=marisela.delvalle93@gmail.com,PASSWORD=12345678910,GHOST_VERSION=reference,VRT=true --spec cypress/integration/examples/ghost_F07_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F07_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F07_testing.spec.js/bitmaps_reference
cp cypress/screenshots/examples/ghost_F07_testing.spec.js/bitmaps_reference/* vrt_screenshots/examples/ghost_F07_testing.spec.js/bitmaps_reference/
node_modules/cypress/bin/cypress run --env GHOST_URL=http://localhost:2370,EMAIL=marisela.delvalle93@gmail.com,PASSWORD=12345678910,GHOST_VERSION=test,VRT=true --spec cypress/integration/examples/ghost_F07_testing.spec.js
mkdir vrt_screenshots/examples/ghost_F07_testing.spec.js/bitmaps_test
cp cypress/screenshots/examples/ghost_F07_testing.spec.js/bitmaps_test/* vrt_screenshots/examples/ghost_F07_testing.spec.js/bitmaps_test/


# Generate report
cp -R vrt_screenshots vrt_report/

cd vrt_report/
npm install
cd pathfinder
node index.js
cd ..
npm run start