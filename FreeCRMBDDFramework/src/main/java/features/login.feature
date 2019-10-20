Feature: Free CRM Login Feature

#  Scenario: Free CRM Login Test Scenario
#    Given user is already on login Page
#    When title of Login Page is Free CRM
#    And user enters "Admin" and "admin123"
#    And user clicks on login button
#    Then user is on Home Page
  
#with Examples Keyword
  Scenario Outline: Free CRM Login Test Scenario
    Given user is already on login Page
    When title of Login Page is Free CRM
    And user enters "<username>" and "<password>"
    And user clicks on login button
    Then user is on Home Page
    Then close the browser
    
    Examples:
    	| username | password |
    	| Admin    | admin123  |
    	| tom      | test456   |