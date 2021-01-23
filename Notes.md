Assumptions:

- Considering this project's purpose, the lack of security is acceptable (no real authentication, authorization for routes, etc.)
- Testing the backend in isolation can be done only partially: there is no GET endpoint for a proper validation of entity creation (we only rely on POST response), there is no mechanism of cleaning up before/after each test (if testing the UI in isolation we can always use a stub instead of API network calls, so we have a reliable way of knowing the app state when the test starts, etc.) 
- Because it's impossible to clean data (in a blackbox approach), being in-memory, a safe approach would be to make sure unique names are used for Customer entities in a test session
- POST should not be used for reading data, GET should be used instead with query params. This would be a blocker issue in real life, but here I'll assume this is valid. 
- It's not clear from requirement if `name` field is mandatory, we'll assume it is not and, when missing, all customers are returned in response
- Assuming test data exists would be valid here (data being hardcoded), but for increased realibility, API tests will not validate hardcoded data, will only validate data created by the tests.


Bugs/Improvements:
- API/design: POST is used here for reading data, GET must be used instead
- UI: Each customer entity should have it's own route, so it can be navigated directly
- UI: One customer is not accesible, missing mandatory fields 