# Test Environment - Customer App #

The Customer App application is a web application written using ReactJS on the frontend and Node.js in the backend.

## PRE-REQUISITES ##

The only pre-requisite to run this app is to have npm and Node.js installed in your machine. For instructions on how to install, go to https://nodejs.org/en/

## How to run it ##

After clonning the repo...

### 1) Starting the backend ###

Open a terminal, go to the root of this repo and:

```
cd backend
npm install
npm start
```
The server will be listening on port 3001. If you need to change this, got to /backend/server.js and change the port variable value in the first line.

```
const port = 3001;
```

### 2) Starting the frontend ###

Open a new terminal, go to the root of this repo and:

**Important:** if you changed the backend port number, you will have to change it also on /frontend/src/App.js, on line 3, before starting the frontend.

```
cd frontend
npm install
npm start
```

Go to to a web browser and open http://localhost:3000/