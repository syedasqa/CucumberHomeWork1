package runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
	features="src\\test\\resourses\\features", 
	glue="steps",
	tags= {"@Hw1Feature"},
	monochrome=true,
	dryRun=false,
	plugin = {
		"pretty",
		"html:target/reports/cucumber.html",
		"json:target/reports/cucumber.json",
	}
)

public class LoginRunner {

}
