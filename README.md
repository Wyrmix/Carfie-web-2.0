# carfie2.0

This is from the second mockup I was sent. 

npm run dev


## Deployment

Deployment is done through the serverless framework and should be configured using serverless.yaml in the project root.

_Requirements:_

AWS cli:

  1. pip3 install awscli --upgrade --user (should work with pip if you don't have python 3 installed)
  2. [add to path](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html#awscli-install-osx-path)

serverless framework:

  1. npm install -g serverless

AWS access keys:

  1. get from an admin

_Steps:_
1. log into AWS cli by running "AWS configure"
2. from the root of the project run "serverless"
