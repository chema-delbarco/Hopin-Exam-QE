Assumptions:

- Considering this project's purpose, the lack of security is acceptable (no real authentication, authorization for routes, etc.)
- POST should not be used for reading data, GET should be used instead with query params. This would be a blocker issue in real life, but here I'll assume this is valid. 
- API: It's not clear from requirements if `name` field is mandatory, I'll assume it is, it doesn't make sense to provide the list of customers when there is no data about the user requesting it - hence the failing tests
- API: Assuming test data always exists (here is in-memory, but we can always use a test fixture for database seeding in a real-world application, etc)


Bugs/Improvements:
- API/design: POST is used here for reading data, GET must be used instead
- API: `name` field is not mandatory
- UI: Each customer entity should have it's own route, so it can be navigated directly
- UI: One customer is not accesible, missing mandatory fields 