import dotenv from 'dotenv';
dotenv.config();
const { I } = inject();


/*
const args = process.argv.slice(3);

const findValue = (valueName) =>{
    const arg = args.find(arg => arg.startsWith(`--${valueName}=`));
    return arg ? arg.split('=')[1] : null;
}


const email = findValue('email') || process.env.EMAIL;
const password = findValue('password') || process.env.PASSWORD;
*/
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const wrongEmail = process.env.WRONGMAIL;
const wrongPass = process.env.WRONGPASS;



//LOGIN
//Successfull test
Given("I am on the login page", ()=>{
    I.amOnPage('/login');
    I.wait(3);
});
When("I enter the email: {string} and password: {string}", (emailIn, passwordIn)=>{
  I.fillField("Email", emailIn || email);
  I.fillField("Password", passwordIn || password);
});
When("I click the login page", ()=>{
  I.click(".login-button");
  I.wait(10);
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
When("I enter the wrong email: {string} and wrong password: {string}", (emailIn, passwordIn)=>{
I.fillField("Email", emailIn || wrongEmail);
I.fillField("Password", passwordIn || wrongPass);
});

Then("I should get an error message", ()=>{
I.click(".login-button");
I.see("Login was unsuccessful.");
});

