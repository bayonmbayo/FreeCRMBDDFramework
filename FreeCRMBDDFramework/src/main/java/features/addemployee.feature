Feature: Free CRM add employee

	Scenario: Free CRM Add a new Employee Test Scenario
    Given user is already on login Page
    When title of Login Page is Free CRM
    And user enters username and password
    | Admin | admin123 |
    And user clicks on login button
    Then user is on Home Page
    Then user moves the mouse over pim and click on add employee
    Then user is on add employee page
    Then user tipps employee details
    | bayon | mbayo | musewa |
    Then user click on save button
    Then close the browser
