# Drones web client

React/TypeScript application

Run locally:
`npm start`


### Used patch-package to update `kurento-utils` dependency
To change it, update desired file and then:
`npx patch-package kurento-utils`

### Deploy

Use `npm run deploy`
to build and upload project to s3 bucket

Make sure you have aws-cli installed, and aws access to s3 upload

To add aws user use: `aws configure`
with access credentials