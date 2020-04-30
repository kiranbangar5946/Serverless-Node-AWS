# aws-serverless-configuration
commands for serverless:
sudo snap install aws-cli --classic
sudo npm install -g  serverless
sudo aws configure
sls config credentials --provider aws --key accesskeyId --secret secretKeyId --profile serverless-admin


#commands to get started with serverless code
sls create -t aws-nodejs (creates .gitignore,serverless.yml and handler.js file)
Run Function:
1.sls invoke local -f hello 
note:hello is my function name.
To pass parameters .
sls invoke local -f hello -d '{"a":10,"b":2}'
sls deploy -f hello
sls deploy -s production -f hello

#check logs
sls logs -f hello -s production --startTime 10m
sls remove -s dev //removes all lamda function from dev