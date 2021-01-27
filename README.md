# Notes and assumptions

In order to make running the backend/frontend and tests in one command I added:

- one endpoint in backend, waiting for HEAD requests on `/`, this allows using a script which runs the backend in background and waits for availability (not working on POST endpoints)
- one extra `npm` script in frontend, which allows running the frontend with hot reloaded disabled

I made a bunch of assumptions, the full list can be found [here](Notes.md)

# Running on a local machine

Install dependencies: 

`npm install`

## Run API tests:

`npm run test:api`

## Run UI tests:

Headless mode: 

`npm run test:ui:headless`

Headed mode (in Chrome):

`npm run test:ui:chrome`

## Reports

HTML Reports are located in the folder `mochawesome-report`. If tests are failing, screenshots will be saved in `cypress/screenshots`. Test runs are recorded as videos in `cypress/videos`.


