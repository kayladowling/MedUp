describe('Signup Authentication', function() {
   var signinURL;
   var email = element(by.model('data.username'));
   var password = element(by.model('data.password'));
   var signupButton = element(by.buttonText('Submit'));
   var error = element(by.css('.popup-container.popup-showing.active'));
 
   it('should redirect to the signup page if trying to load protected page while not authenticated', function() {
     browser.get('/#/signup');
     signupURL = browser.getCurrentUrl();
 
     browser.get('/#/signup');
     expect(browser.getCurrentUrl()).toEqual(signupURL);
   });
 
   it('should warn on missing/malformed credentials', function() {
     email.clear();
     password.clear();
 
     password.sendKeys('test');
     signupButton.click();
     expect(error.getText()).toMatch('missing email');
 
     email.sendKeys('test');
     signupButton.click();
     expect(error.getText()).toMatch('invalid email');
 
     email.sendKeys('@example.com');
     password.clear();
     signupButton.click();
     expect(error.getText()).toMatch('missing password');
   });
 
   it('should check if NEW email address and password is valid', function() {
     email.clear();
     password.clear();
 // updated to test against username & password in database
     email.sendKeys('test@example.com');
     password.sendKeys('test');
     signupButton.click();
     expect(browser.getCurrentUrl()).not.toEqual(signupURL);
   });
 
 });