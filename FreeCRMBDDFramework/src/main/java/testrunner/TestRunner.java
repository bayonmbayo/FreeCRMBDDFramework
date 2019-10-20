package testrunner;



import io.cucumber.junit.CucumberOptions;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/src/main/java/features/employee.feature", //the path of features files 
				 glue="stepdefintions", // the path  of stepdefinitions files
				 plugin = {"pretty", "html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
				 dryRun = false, // check the mapping is proper between feature file and stepdefinition file
				 monochrome = true, // display the console output in a proper readable format
				 strict = true //check if any stepdefinition is not defined in stepdefinition file
				 )
public class TestRunner {
	
}
