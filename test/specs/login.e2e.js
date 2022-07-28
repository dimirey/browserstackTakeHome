const LoginPage = require('../pageobjects/login.page');

describe('My Login application', () => {
    it('log in page should contain a username field', async () => {
        await LoginPage.open();
        await expect(LoginPage.inputUsername).toBeDisplayed()
    });

    it('log in page should contain a password field', async () => {
        await LoginPage.open();
        await expect(LoginPage.inputPassword).toBeDisplayed()
    });

    it('log in page should contain a submit button', async () => {
        await LoginPage.open();
        await expect(LoginPage.btnSubmit).toBeDisplayed()
    });

    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('demouser', 'testingisfun99');
        await expect(LoginPage.logOut).toBeDisplayed()
    });
});


