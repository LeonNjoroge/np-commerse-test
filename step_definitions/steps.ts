const { I } = inject();
// Add in your custom step files

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


//Computer
// Testing functionality of getting computer
Given("I am on the computer page", ()=>{
  I.amOnPage("/computers");
  I.see("Computers","h1");
});
When("I select the category {string}", (linkText)=>{
  I.waitForElement(`a[href*="${linkText}"]`, 10);  // Wait for the link to appear by its href
  I.click(`a[href*="${linkText}"]`);  // Click the link
  I.wait(3);
});
When("I select {string} - laptop I want",(linkText)=>{
  I.waitForElement(`a[href*="${linkText}"]`, 10);  
  I.click(`a[href*="${linkText}"]`); 
  I.wait(3);  //
});
When("I add computer to cart",(linkText)=>{ 
  I.click(".add-to-cart-button"); 
  I.wait(5);  //
})

When("I get product added successfully",()=>{ 
  I.see(".success")
  I.waitForElement(".success", 20)
})




