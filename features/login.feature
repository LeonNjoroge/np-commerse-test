Feature: Login functionality
  Scenario: User logs in with valid credentials
    Given I am on the login page
    When I enter the email: "" and password: ""
    When I click the login page
    When I complete human verification
    Then I should be redirected to the dashboard
  Scenario: User logs in with invalid details
      Given I am on the login page
      When I enter the wrong email: "" and wrong password: ""
      Then I should get an error message