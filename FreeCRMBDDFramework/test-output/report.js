$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/employee.feature");
formatter.feature({
  "name": "Free CRM Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Free CRM Add a new Employee Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "user moves the mouse over pim and click on add employee",
  "keyword": "Then "
});
formatter.step({
  "name": "user is on add employee page",
  "keyword": "Then "
});
formatter.step({
  "name": "user tipps \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on save button",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
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
        "firstname",
        "lastname"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "bayon",
        "Mbayo"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "Viviane",
        "Mwamba"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Free CRM Add a new Employee Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_is_already_on_login_page() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.title_of_Login_Page_is_Free_CRM() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Admin\" and \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_enters_username_and_password(String,String) in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_clicks_on_login_button() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_is_on_Home_Page() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves the mouse over pim and click on add employee",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_moves_the_mouse_over_pim_and_click_on_add_employee() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on add employee page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_is_on_add_employee_page() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tipps \"bayon\" and \"Mbayo\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_enters_firstname_and_lastname(String,String) in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_click_on_save_button() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.close_the_browser() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Free CRM Add a new Employee Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_is_already_on_login_page() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.title_of_Login_Page_is_Free_CRM() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Admin\" and \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_enters_username_and_password(String,String) in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_clicks_on_login_button() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_is_on_Home_Page() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves the mouse over pim and click on add employee",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_moves_the_mouse_over_pim_and_click_on_add_employee() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on add employee page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_is_on_add_employee_page() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tipps \"Viviane\" and \"Mwamba\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_enters_firstname_and_lastname(String,String) in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.user_click_on_save_button() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefintions.LoginStepDefintion.close_the_browser() in file:/C:/Users/bayon/eclipse-workspace/FreeCRMBDDFramework/target/classes/"
});
formatter.result({
  "status": "passed"
});
});