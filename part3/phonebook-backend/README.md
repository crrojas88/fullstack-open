# The Phonebook Backend
<br />

### Solution for Part 3 of the Fullstack Open Course
<br />

### Deployed server/app

You can find the deployed app and server [here](https://rod-phonebook.herokuapp.com/)

<br />

### Deploying from a subdirectory
Assuming you've already installed the Heroku CLI, are logged in, and created a new Heroku app, use the following commands in order to deploy a subdirectory to Heroku from the CLI. Make sure to commit your code first.
<br />


```
heroku git:remote -a phonebook-backend-2021
```
CD to the top level of the working tree
```
cd ..
```
Specify the path/to/subdirectory
```
git subtree push --prefix part3/phonebook-backend heroku main
```
