

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get logOut () {
        return $('#logout')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.click()
        await this.inputUsername.keys(username);
        await this.inputUsername.keys('Return');
        await this.inputPassword.click()
        await this.inputPassword.keys(password);
        await this.inputPassword.keys('Return');
        await this.btnSubmit.click();
        await this.logOut.waitForClickable();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('signin');
    }
}

module.exports = new LoginPage();
