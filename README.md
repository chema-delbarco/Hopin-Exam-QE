# Hopin's Test and Automation Challenge #

The goal of this challenge is to assess that, given a pre-developed application composed by a front-end UI and back-end API, you:
- are able to create a test environment using tools Hopin currently uses, such as Git, npm and node.js;
- are able to build API level automated tests scenarios using a test framework such as mocha (or any other of you choice) and a library to make API calls such as axios (or any other of you choice); and
- are able to build UI level automated tests scenarios using a test framework such as mocha (or any other of you choice) and an UI automation tool such as Selenium (or any other of you choice).
- are able to create CI pipelines that can run your tests effectively. 

## Considerations ##
- The application's requirement are explained in the **Requirements.md** file on the root of the git repository.
- You can follow the steps in **TestEnvironment.md** to create a local environment.
- The tasks outputs will have to be published in a public git repository. You are free to use any resources you want to research.
- Ideally the task should be delivered within 3 full days after reception. However we're conscious of the fact you might be busy. In that case please let your recruiter know of the estimated date you can commit to deliver the exercise. However please be aware we're continuously interviewing, so the less time you take the better chances you'll get!
- You are free to use any programming language or framework you want. We recommend you to use the ones you're comfortable with. At Hopin we use JS for our Frontends (app and tests) and Ruby and Rust for our Backends (app and tests), so using either of them is obviously an extra.
- Tests must be runnable by us. Please include instructions on how to run them.
- Please try to document any assumptions you had to take as well your thought process on the decisions you took. We want to know how you think :)

## Task 1: Create an automated API level test scenario ##
Software applications are not perfect and neither are the engineers that build them. If you run the application as instructed in **TestEnvironment.md** you will see that some of the API specs were not followed. To avoid having to manually run all the tests again after each new app version is to be released a good strategy is to create automated tests that could be run quickly and with little effort.

Please complete the following:
1) Build a script/program (using any language/framework/library you want) that runs tests to assert the top 3 API non-compliant scenarios you found;
2) Create a Readme file telling us how to run it; and
3) Commit and push everything to a folder called **api-tests** on the public repository you've created for the exercise.

## Task 2: Create an automated UI level test scenario ##
Not just backend engineers make mistakes, and the frontend layer is also responsible for checking business rules and presenting the correct information to the user. Therefore we also need to have ways to automatically check it.

Please complete the following:
1) Build a script/program (using any language/framework/library that you want) that runs tests to assert the top 3 UI non-compliant scenarios you found;
2) Create a Readme file telling us how to run it; and
3) Commit and push those to a folder called **ui-tests** on the public repository you've created for the exercise.

## Task 3: Create a CI pipeline
An important part of the work of an SDET is to define and maintain CI pipelines where tests can be run reliably and fast, as well as getting proper reporting of the state
of the quality built. Therefore:

1) Create a CI pipeline that builds, deploys and runs your tests from Task 2 and 3 in the way you feel should be best. As the repo is in Github we suggest GitHub Actions to make it easier, but any other tool should be fine as long as you provide a way for us to check and run the pipelines.

