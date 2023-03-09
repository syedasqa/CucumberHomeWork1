package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	// Element library
	@FindBy(how = How.XPATH, using = "//input[@id='username']")
	WebElement userName;
	@FindBy(how = How.XPATH, using = "//input[@id='password']")
	WebElement password;
	@FindBy(how = How.XPATH, using = "//button[@name='login']")
	WebElement signInButton;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a/span[1]")
	WebElement bankCash;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")
	WebElement newAccount;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement submitButton;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account\"]")
	WebElement AccountTitle;
	@FindBy(how = How.XPATH, using = "//*[@id=\"description\"]")
	WebElement description;
	@FindBy(how = How.XPATH, using = "//*[@id=\"balance\"]")
	WebElement initialBalance;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account_number\"]")
	WebElement accountNumber;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_person\"]")
	WebElement contactPerson;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_phone\"]")
	WebElement Phone;
	@FindBy(how = How.XPATH, using = "//*[@id=\"ib_url\"]")
	WebElement internetBankingURL;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]")
	WebElement accountCreateStatus;
	
	public void enterUserName(String value) {
		userName.sendKeys(value);
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void enterPassword(String value) {
		password.sendKeys(value);
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void clickOnSigninButton() {

		signInButton.click();
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void clickOnBankCashButton() {
		bankCash.click();
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
	}

	public void clickOnNewAccountButton() {
		
		newAccount.click();
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void clickOnSubmitButton() {
		submitButton.click();		
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public String getPageTitle() {
		return driver.getTitle();
	}



	public void enterAccountTitle(String value) {
		AccountTitle.sendKeys(value);
	}

	public void enterDescription(String value) {
		description.sendKeys(value);
		
	}

	public void enterInitialBalance(String value) {
		initialBalance.sendKeys(value);
		
	}

	public void enterAccountNumber(String value) {
		accountNumber.sendKeys(value);
	}

	public void enterContactPerson(String value) {
		accountNumber.sendKeys(value);
		
	}

	public void enterPhone(String value) {
		
		Phone.sendKeys(value);
	}

	public void enterInternerBankingUrl(String value) {
		internetBankingURL.sendKeys(value);
	}
	
	public String getAccountCreateStatus() {
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		return accountCreateStatus.getText();
	}

}
