#! /bin/bash

r.js -o build.js

rm -rf dist/assets/fira-sans
rm -rf dist/assets/imgs
rm -rf dist/idea-layouts
rm dist/build.txt dist/build.sh dist/build.js dist/README.md dist/LICENSE

# comment this if you don't want to test
sudo cp dist/ -r /var/www/html/
