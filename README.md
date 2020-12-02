# Hopin's Test and Automation Challenge #

The goal of this challenge is to assess that, given a pre-developed application composed by a front-end UI and back-end API, you:
- are able to create a test environment using tools Hopin currently uses, such as Git, npm and node.js;
- are a detail-oriented Test Engineer that is able to go through feature specifications, create a test plan and manually check if the app is acting accordingly;
- are able to build API level automated tests scenarios using a test framework such as mocha (or any other of you choice) and a library to make API calls such as axios (or any other of you choice); and
- are able to build UI level automated tests scenarios using a test framework such as mocha (or any other of you choice) and an UI automation tool such as Selenium (or any other of you choice).

## Considerations ##
- The tasks outputs will have to be published in a public git repository. You are free to use any resources you want to research.
- The task needs to be delivered, at the latest, 3 full days after reception.
- You are free to use any programming language or framework you want. We recommend you to use the ones you're comfortable with. At Hopin we use JS for our Frontends (app and tests) and Ruby and Rust for our Backends (app and tests), so using either of them is obviously an extra.
- If you need to take any assumptions please note them as part of your answers.

## Task 1: Test Environment Setup ##

Is is very important for a Test Engineer to be able to create a test environment following the instructions written by the developers. Therefore, you'll have to take the following steps:
1) Clone the repository;
2) Follow the **TestEnvironment.md** instructions to build and start the Customer App web application that you will be responsible to test;
3) After the app is running, fill the name field in the first screen, hit Submit and take a screenshot of the page showing your name and the current date; and 
4) Create a new public git repository, and commit and push the screenshot to it's root.

## Task 2: Create a test plan and run it mannually ##

Understanding correclty the expected application's behaviour is crucial to build an efficient test strategy. In this task, you'll have to:
1) Read carefully the application's requirement from the **Requirements.md** file on the root of the git repository;
2) Create a test plan that will _minimally_ contain the steps that have to be taken and their expected results;
3) Execute the test plan you've just created and record textually it's results; and
4) Commit and push the test plan and its results to the public repository you've created on **Task 1**.

## Task 3: Create an automated API level test scenario ##

Unfortunattely, software application are not perfect neither are the engineers that build them, so as you could see some of the API specs were not followed. To avoid having to manually run all the tests again after each new app version is to be released a good strategy is to create automated tests that could be run quickly and with little effort.

Please complete the following:
1) Build a script/program (using any language/framework/library you want) that runs tests to assert the top 3 API non-compliant scenarios you found;
2) Create a Readme file telling us how to run it; and
3) Commit and push everything to a folder called **api-tests** on the public repository you've created on **Task 1**.

## Task 4: Create an automated UI level test scenario ##

Not just backend engineers make mistakes, and the frontend layer is also responsible for checking business rules and presenting the correct information to the user. Therefore we also need to have ways to automatically check it.

Please complete the following:
1) Build a script/program (using any language/framework/library that you want) that runs tests to assert the top 3 UI non-compliant scenarios you found;
2) Create a Readme file telling us how to run it; and
3) Commit and push those to a folder called **ui-tests** on the public repository you created on **Task 1**.

