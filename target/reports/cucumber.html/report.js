$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resourses/features/Hw1.feature");
formatter.feature({
  "name": "Techfios billing login page functionality validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Hw1Feature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters the \"\u003cusername\u003e\" in the \"username\" field",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the \"\u003cpassword\u003e\" in the \"password\" field",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountTitle\u003e\" in the \"accountTitle\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cdescription\u003e\" in the \"description\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cinitialBalance\u003e\" in the \"initialBalance\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountNumber\u003e\" in the \"accountNumber\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccontactPerson\u003e\" in the \"contactPerson\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cPhone\u003e\" in the \"Phone\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in the \"internetBankingURL\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ]
    },
    {
      "cells": [
        "demo2@techfios.com",
        "abc123",
        "Mckinney-",
        "Savings",
        "5000",
        "750707",
        "Collin",
        "856790",
        "http://www.google.com"
      ]
    },
    {
      "cells": [
        "demo2@techfios.com",
        "abc124",
        "Mckinney-",
        "Savings",
        "5000",
        "750707",
        "Collin",
        "856790",
        "http://www.google.com"
      ]
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Mckinney-",
        "Savings",
        "5000",
        "750707",
        "Collin",
        "856790",
        "http://www.google.com"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Hw1Feature"
    }
  ]
});
formatter.step({
  "name": "User enters the \"demo2@techfios.com\" in the \"username\" field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_the_in_the_field1(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the \"abc123\" in the \"password\" field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_the_in_the_field1(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.LoginStepDefinition.user_should_land_on_Dashboard_page(LoginStepDefinition.java:61)\r\n\tat ✽.User should land on Dashboard page(file:///C:/Users/sohely/eclipse-workspace/CucumberHomeWork1/src/test/resourses/features/Hw1.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Mckinney-\" in the \"accountTitle\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Savings\" in the \"description\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"5000\" in the \"initialBalance\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"750707\" in the \"accountNumber\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Collin\" in the \"contactPerson\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"856790\" in the \"Phone\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"http://www.google.com\" in the \"internetBankingURL\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Hw1Feature"
    }
  ]
});
formatter.step({
  "name": "User enters the \"demo2@techfios.com\" in the \"username\" field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_the_in_the_field1(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the \"abc124\" in the \"password\" field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_the_in_the_field1(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.LoginStepDefinition.user_should_land_on_Dashboard_page(LoginStepDefinition.java:61)\r\n\tat ✽.User should land on Dashboard page(file:///C:/Users/sohely/eclipse-workspace/CucumberHomeWork1/src/test/resourses/features/Hw1.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Mckinney-\" in the \"accountTitle\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Savings\" in the \"description\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"5000\" in the \"initialBalance\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"750707\" in the \"accountNumber\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"Collin\" in the \"contactPerson\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"856790\" in the \"Phone\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"http://www.google.com\" in the \"internetBankingURL\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Hw1Feature"
    }
  ]
});
formatter.step({
  "name": "User enters the \"demo@techfios.com\" in the \"username\" field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_the_in_the_field1(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the \"abc123\" in the \"password\" field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_the_in_the_field1(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Mckinney-\" in the \"accountTitle\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Savings\" in the \"description\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"5000\" in the \"initialBalance\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"750707\" in the \"accountNumber\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Collin\" in the \"contactPerson\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"856790\" in the \"Phone\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"http://www.google.com\" in the \"internetBankingURL\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});