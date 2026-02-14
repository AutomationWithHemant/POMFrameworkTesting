import {Locator,Page} from "@playwright/test"

export class LoginPage{
    readonly page : Page;
    readonly usernameInputBox : Locator;
    readonly passwordInputBox : Locator;
    readonly loginButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.usernameInputBox = page.locator("[name='username']");
        this.passwordInputBox = page.locator("[name='password']");
        this.loginButton = page.locator("[type='submit']");
    }

    async openApplication(){
        await this.page.goto(`${process.env.BASE_URL}web/index.php/auth/login`);
    }
   
    async login(usernameVal: string,passwordVal: string): Promise<void>{
        await this.usernameInputBox.fill(usernameVal);
        await this.passwordInputBox.fill(passwordVal);
        await this.loginButton.click();
    }
}