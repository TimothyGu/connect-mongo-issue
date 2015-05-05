#!/bin/sh

# This installs all dependencies, but prevents npm from deduping mongodb
# module as a part of the installation process.

npm i connect-mongo
npm i mongodb
npm i express-session
