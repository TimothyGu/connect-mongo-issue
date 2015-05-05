This demonstrates kcbanner/connect-mongo#172.

How to reproduce
================

```
rm -rf node_modules
./install.sh
npm ls | grep mongodb@ # shows that there are two mongodb installations
node index.js          # BOOM
```

How to not reproduce
====================

Manual deduping
---------------

```
rm -rf node_modules
./install.sh
npm dedupe
npm ls | grep mongodb@ # shows that there is one mongodb installation
node index.js          # Yay!
```

Automatic deduping
------------------

```
rm -rf node_modules
npm install
npm ls | grep mongodb@ # shows that there is one mongodb installation
node index.js          # Yay!
```
