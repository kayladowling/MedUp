describe('AuthCtrl', function() {
   
   it('should redirect to the signin page if trying to load protected page while not authenticated', function() {
     browser.get('/#/signin');
     signinURL = browser.getCurrentUrl();
 
     browser.get('/#/signin');
     expect(browser.getCurrentUrl()).toEqual(signinURL);
   });

    it('should redirect to the signup page if trying to load protected page while not authenticated', function() {
     browser.get('/#/signup');
     signupURL = browser.getCurrentUrl();
 
     browser.get('/#/signup');
     expect(browser.getCurrentUrl()).toEqual(signupURL);
   });


 });
