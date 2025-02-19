const { I } = inject();
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
  
