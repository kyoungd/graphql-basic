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
