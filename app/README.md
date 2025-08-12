To run this application, a docker engine should be installed on your machine. 
If it is, then you should navigate to project core directory (the directory this file is located in)
Then you should run "docker-compose up". The project will start up. 
Directory "keys" will be created in the current one. It will contain keystore.jks file. It is needed for enctryption inside the application. It can be safely deleted, as it will be created each time application starts up.
The frontend webpage will be accessible under localhost:3000/