package stepdefintions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HooksStepDefintion {
	
	@Before
	public void setUp() {
		System.out.println("Launch FF");
		System.out.println("Enter the URL page");
	}
	
	@After
	public void tearDown() {
		System.out.println("Close the browser");
	}
	
	@Given("user is on employee page")
	public void user_is_on_employee_page() {
	    System.out.println("user is on employee page");
	}

	@When("user fills the employees form")
	public void user_fills_the_employees_form() {
		System.out.println("user fills the employee form");
	}

	@Then("employee is saved")
	public void employee_is_saved() {
		System.out.println("employee is saved");
	}
}
