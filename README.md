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

### Reports

HTML Reports are located in the folder `mochawesome-report`. If tests are failing, screenshots will be saved in `cypress/screenshots`. Test runs are recorded as videos in `cypress/videos`.

## Run performance tests:

`k6.io` is used for performance tests, there's only one simple script doing a POST on the available endpoint, validating http status and the size of body.
Run on a local machine using `docker` (after starting the backend - this can be also automated with `docker-compose`):

`docker run -v $PWD/performance-tests:/scripts -i loadimpact/k6 run --vus 40 --iterations 50000  -e BASE_URL=http://host.docker.internal:3001 /scripts/perf-test.js`

- `vus` - virtual users, how many concurrent connection is `k6` using for this run
- `iterations` - total requests (shared between virtual users)
- `duration` - test duration - can be used instead `iterations`
- `BASE_URL` - environment variable which allows running the script against a deployed service (when running locally use the example above)

Metrics will be displayed in console, but there are several ways of improving metrics visualization, a popular one being Grafana visual dashboards with InfluxDB. Another great usage in CI/CD is comparing metrics with previous results and raising alarms if performance decreased under a certain threshold.

Metrics sample:

```
     ✓ status was 200
     ✓ body has timestamp

     checks.....................: 100.00% ✓ 100000 ✗ 0   
     data_received..............: 54 MB   4.7 MB/s
     data_sent..................: 6.8 MB  584 kB/s
     http_req_blocked...........: avg=10.38µs min=1.33µs   med=2.96µs  max=8.31ms  p(90)=5.05µs   p(95)=11.12µs 
     http_req_connecting........: avg=4.06µs  min=0s       med=0s      max=6.46ms  p(90)=0s       p(95)=0s      
     http_req_duration..........: avg=8.99ms  min=623.38µs med=7.58ms  max=49.19ms p(90)=14.16ms  p(95)=15.46ms 
     http_req_receiving.........: avg=70.56µs min=16.3µs   med=47.37µs max=14.88ms p(90)=119.48µs p(95)=166.62µs
     http_req_sending...........: avg=29.83µs min=8.65µs   med=17.22µs max=19.06ms p(90)=54.92µs  p(95)=83.68µs 
     http_req_tls_handshaking...: avg=0s      min=0s       med=0s      max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...........: avg=8.89ms  min=454.99µs med=7.48ms  max=48.65ms p(90)=14.05ms  p(95)=15.34ms 
     http_reqs..................: 50000   4296.377881/s
     iteration_duration.........: avg=9.24ms  min=972.19µs med=7.81ms  max=49.5ms  p(90)=14.4ms   p(95)=15.78ms 
     iterations.................: 50000   4296.377881/s
     vus........................: 40      min=40   max=40
     vus_max....................: 40      min=40   max=40
```



