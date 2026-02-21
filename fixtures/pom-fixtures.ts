import {test as baseTest} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import {HomePage} from "../pages/HomePage"
import { UserPage } from "../pages/UserPage"

type PomFixturesType = {
    loginPage : LoginPage;
<<<<<<< HEAD
    homePage : HomePage;
=======
    homePage : HomePage; 
    userPage : UserPage;  
>>>>>>> refs/remotes/origin/main
}

export const test = baseTest.extend<PomFixturesType>({
    loginPage : async({page},use) =>{
<<<<<<< HEAD
        const loginPageObj = new LoginPage(page);
        use(loginPageObj)
    },
    homePage : async({page},use) =>{
         const homePageObj = new HomePage(page);
        use(homePageObj)
=======
        await use(new LoginPage(page));
    },
    homePage : async({page},use) =>{
        await use(new HomePage(page));
    },
    userPage : async({page},use) => {
        await use(new UserPage(page))
>>>>>>> refs/remotes/origin/main
    }
})