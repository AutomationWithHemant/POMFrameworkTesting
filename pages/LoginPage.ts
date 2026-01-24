import {Locator,Page} from "@playwright/test"

export class LoginPage{
    readonly page : Page;
    readonly usernameInputBox : Locator;
    readonly passwordInputBox : Locator;
    readonly loginButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.usernameInputBox = page.locator("#user-name");
        this.passwordInputBox = page.locator("id=password");
        this.loginButton = page.locator("id=login-button");
    }

    async openApplication(){
        await this.page.goto("https://www.saucedemo.com/");
    }
   
    async login(usernameVal: string,passwordVal: string): Promise<void>{
        await this.usernameInputBox.fill(usernameVal);
        await this.passwordInputBox.fill(passwordVal);
        await this.loginButton.click();
    }
}