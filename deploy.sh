#!/usr/bin/env sh
echo "Getting ready for deployment"

# experiemnt # 1
# file='package.json'
# search="'name': 'miguel-rivas-2016',"
# replace="'homepage': 'https://miguel-rivas.github.io/2016',"
# sed -i "2s/$replace/" $file

# experiemnt # 2
# echo '"homepage": "https://miguel-rivas.github.io/2016",' >> package.json

# git push git@github.com:miguel-rivas/2016.git --delete gh-pages
npm run build
cd build || exit
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:miguel-rivas/2016.git master:gh-pages