Feature: Free CRM Login Feature

	Scenario Outline: Free CRM Add a new Employee Test Scenario
    Given user is already on login Page
    When title of Login Page is Free CRM
    And user enters "<username>" and "<password>"
    And user clicks on login button
    Then user is on Home Page
    Then user moves the mouse over pim and click on add employee
    Then user is on add employee page
    Then user tipps "<firstname>" and "<lastname>"
    Then user click on save button
    Then close the browser
    
    Examples:
    	| username | password | firstname | lastname |
    	| Admin		 | admin123	| bayon 		| Mbayo		 |
    	| Admin		 | admin123	| Viviane   | Mwamba   |