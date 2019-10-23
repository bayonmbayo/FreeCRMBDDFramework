//package stepdefintions;
//
//import java.util.List;
//
//import org.junit.Assert;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//
//import io.cucumber.datatable.DataTable;
//import io.cucumber.java.en.And;
//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;
//
//public class EmployeeStepDefinition {
//
//	WebDriver driver;
//
//	@Given("^user is already on login Page$")
//	public void user_is_already_on_login_page() {
//		driver = new ChromeDriver();
//		driver.get("https://opensource-demo.orangehrmlive.com/");
//	}
//	
//	@When("^title of Login Page is Free CRM$")
//	public void title_of_Login_Page_is_Free_CRM() {
//	    String title = driver.getTitle();
//	    System.out.println(title);
//	    Assert.assertEquals(title, "OrangeHRM");
//	}
//	
//	@When("user enters username and password")
//	public void user_enters_username_and_password(DataTable credentials) {
//		 List<List<String>> data = credentials.asLists(String.class);
//		 WebElement elUsername = driver.findElement(By.id("txtUsername"));
//		 elUsername.sendKeys(data.get(0).get(0));
//		 WebElement elPassword = driver.findElement(By.id("txtPassword"));
//		 elPassword.sendKeys(data.get(0).get(1));
//	}
//	
//	@And("^user clicks on login button$")
//	public void user_clicks_on_login_button() {
//	    WebElement elButtonLogin = driver.findElement(By.xpath("//input[@id='btnLogin']"));
//	    elButtonLogin.click();
//	}
//	
//	@Then("^user is on Home Page$")
//	public void user_is_on_Home_Page() {
//	    WebElement elLogoPage = driver.findElement(By.xpath("//a[@id='welcome']"));
//	    System.out.println(elLogoPage);
//	    Assert.assertEquals(elLogoPage.getText(), "Welcome Admin");
//	}
//	
//	@Then("user moves the mouse over pim and click on add employee")
//	public void user_moves_the_mouse_over_pim_and_click_on_add_employee() throws InterruptedException {
//		Actions action = new Actions(driver);
//		WebElement elPim = driver.findElement(By.xpath("//b[contains(text(),'PIM')]"));
//		WebElement elAddEmployee = driver.findElement(By.xpath("//a[@id='menu_pim_addEmployee']"));
//		action.moveToElement(elPim).moveToElement(elAddEmployee).click().perform();
//		Thread.sleep(2000);
//	}
//	
//	@Then("^user is on add employee page$")
//	public void user_is_on_add_employee_page() {
//		WebElement elAddEmployeeLabel = driver.findElement(By.xpath("//h1[contains(text(),'Add Employee')]"));
//		String AddEmployee = elAddEmployeeLabel.getText();
//		Assert.assertEquals(AddEmployee, "Add Employee");
//	}
//	
//	@Then("user tipps employee details")
//	public void user_tipps_employee_details(DataTable credentials) {
//		List<List<String>> data = credentials.asLists(String.class);
//		WebElement elFirstname = driver.findElement(By.xpath("//input[@id='firstName']"));
//		elFirstname.sendKeys(data.get(0).get(0));
//		WebElement elMiddlename = driver.findElement(By.xpath("//input[@id='middleName']"));
//		elMiddlename.sendKeys(data.get(0).get(1));
//		WebElement elLastname = driver.findElement(By.xpath("//input[@id='lastName']"));
//		elLastname.sendKeys(data.get(0).get(2));
//	}
//	
//	@Then("user click on save button$")
//	public void user_click_on_save_button() {
//	    WebElement elSaveButton = driver.findElement(By.xpath("//input[@id='btnSave']"));
//	    elSaveButton.click();
//	}
//	
//	@Then("^close the browser$")
//	public void close_the_browser() throws InterruptedException {
//		Thread.sleep(2000);
//		driver.quit();
//	}
//
//	
//
//}
