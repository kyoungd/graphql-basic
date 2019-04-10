npm install babel-cli@6.26.0 babel-preset-env@1.7.0
-- add .babelrc file to the root folder
{
  "presets": [
    "env"
  ]
}

-- update package.json to use babel to compile.  Add "start" line under "script"
  "scripts": {
    "start": "babel-node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"

-- install graphql (all packages included in this bundle)
npm install graphql-yoga@1.16.7

-- use nodemon
    "start": "nodemon src/index.js --exec babel-node",

-- universal UID generator
npm install uuid@3.3.2

-- add spread operator (...) for babel
npm install babel-plugin-transform-object-rest-spread@6.26.0
-- add to .babelrc
  "plugins": [
    "transform-object-rest-spread"
  ]

-- update nodemon to work with graphql extension
    "start": "nodemon src/index.js --ext js,graphql --exec babel-node",

-- heroku postgre database
* login to dashboard
* Create new app (DDL [New])
* Create app (Button)
* Overvew (Viewtab)
* Installed all-ons -- Configure Add on
* Add-ons : type heroku Postgres -> follow through with pricing
* Settings (View tab)
* View Credentials
Host
ec2-54-225-113-7.compute-1.amazonaws.com
Database
d787ao62d8lc4s
User
mqdkubanoizqvl
Port
5432
Password
e5e56e9ff5f2bc2c1154a28e302690e667a43c8439f472eb89c5314bb7844dad
URI
postgres://mqdkubanoizqvl:e5e56e9ff5f2bc2c1154a28e302690e667a43c8439f472eb89c5314bb7844dad@ec2-54-225-113-7.compute-1.amazonaws.com:5432/d787ao62d8lc4s
Heroku CLI
heroku pg:psql postgresql-sinuous-26932 --app prisma-dev-server-young

-- Run aplications
VirtualBox
pgAdmin 4 v4
docker Quickstart Terminal

npm install -g prisma@1.12.0

-- new folder
prisma init prisma
* name of existing schema? schema.graphql     : standard name
