//LOGIN
//Successfull test
Given("I am on the login page", ()=>{
    I.amOnPage('/login');
    I.wait(3);
});
When("I enter the {string} and {string}", (email, password)=>{
  I.fillField("Email", email);
  I.fillField("Password", password);
});
When("I click the login page", ()=>{
  I.click(".login-button");
  I.wait(30);
});

When("I complete human verification", async () => {

  // 🔹 Call the helper function

});

Then("I should be redirected to the dashboard", () => {
  I.waitForElement("div.dashboard", 10); // Wait for the dashboard to load
  I.see("Welcome"); // Verify login success
});

//Unsuccessfull test
Given("I am on the login page", ()=>{
  I.amOnPage('/login');
  I.wait(3);
});
When("I enter the {string} and {string}", (email, password)=>{
I.fillField("Email", email);
I.fillField("Password", password);
});

Then("I should get an error message", ()=>{
I.click(".login-button");
I.see("Login was unsuccessful.");
});

