###open appstore project
cd appstore

###copy new archives into the public directory
 iOS builds to /ios directory
 Android into /android directory

###update build files and paths

####for iOS update plists
navigate into `appstore/public/apps/JBMobile/ios`
edit plist for respective environments adding paths.
RC (release candidate) is the new build, there goes new version

####for Android update
just edit content in firestore:
https://console.firebase.google.com/u/2/project/jb-internal-app-store/firestore/data/~2Fapps~2Fw4VyuO8qpSOrNGx1uysg
with correct version paths

###build and deploy the app
`npm run deploy` from top directory of appstore.
This will recompile and build the appliction and make it available.

### commit and push new changes
`git add .`
`git commit -am "Commit message"`
`git push`

###test new builds and notify users through mailing list
