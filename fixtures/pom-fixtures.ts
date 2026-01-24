import {test as baseTest} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import {HomePage} from "../pages/HomePage"

type PomFixturesType = {
    loginPage : LoginPage;
    homePage : HomePage;
    
}

export const test = baseTest.extend<PomFixturesType>({
    loginPage : async({page},use) =>{
        const loginPageObj = new LoginPage(page);
        use(loginPageObj)
    }
})