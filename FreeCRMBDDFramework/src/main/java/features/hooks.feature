Feature: Free CRM app test

  Scenario: free crm create add employee test
  	Given user is on employee page
  	When user fills the employees form
  	Then employee is saved

  Scenario: free crm create a task test
  	Given user is on employee page
  	When user fills the employees form
  	Then employee is saved
