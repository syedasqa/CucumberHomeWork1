package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import org.junit.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {

	LoginPage loginPage;

	@Before
	public void beforeRun() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
	}

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=admin/");
	}

	@When("User enters the {string} in the {string} field")
	public void user_enters_the_in_the_field1(String value, String key) {
		if (key.equalsIgnoreCase("username")) {
			loginPage.enterUserName(value);
		} else if (key.equalsIgnoreCase("password")) {
			loginPage.enterPassword(value);
		}
	}

	@When("User clicks on {string}")
	public void user_clicks_on(String buttonName) {
		if (buttonName.equalsIgnoreCase("login")) {
			loginPage.clickOnSigninButton();

		} else if (buttonName.equalsIgnoreCase("bankCash")) {
			loginPage.clickOnBankCashButton();

		} else if (buttonName.equalsIgnoreCase("newAccount")) {
			loginPage.clickOnNewAccountButton();

		} else if (buttonName.equalsIgnoreCase("submit")) {
			loginPage.clickOnSubmitButton();

		}

	}
	
	@Then("User should land on Dashboard page")
	public void user_should_land_on_Dashboard_page() {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginPage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);

	}
	
	@Then("User enters {string} in the {string} field in accounts page")
	public void user_enters_in_the_field_in_accounts_page(String value, String key) {
	    if(key.equalsIgnoreCase("accountTitle")) {
	    	
			loginPage.enterAccountTitle( value + generateRandomNum(9999) );
	    	
	    }else if(key.equalsIgnoreCase("description")) {
	    	loginPage.enterDescription(value);
	    	
	    }else if(key.equalsIgnoreCase("initialBalance")) {
	    	loginPage.enterInitialBalance(value);
	    	
	    }else if(key.equalsIgnoreCase("accountNumber") ){
	    	loginPage.enterAccountNumber(value);
	    	
	    }else if(key.equalsIgnoreCase("contactPerson")) {
	    	loginPage.enterContactPerson(value);
	    	
	    	
	    }else if(key.equalsIgnoreCase("Phone")) {
	    	loginPage.enterPhone(value);
	    	
	    }else if(key.equalsIgnoreCase("internetBankingURL")) {
	    	loginPage.enterInternerBankingUrl(value);
	    	
	    }
	    
	}

	@Then("User should be able to validate account created successfully")
	public void user_should_be_able_to_validate_account_created_successfully() {
		String expectedStatus = "Account Created Successfully";
		String status = loginPage.getAccountCreateStatus();
		boolean isCreatedSuccessfully = status.contains(expectedStatus);
		
		Assert.assertTrue(isCreatedSuccessfully);
	}



	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
