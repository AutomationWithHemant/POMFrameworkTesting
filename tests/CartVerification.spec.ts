/*import {expect} from "@playwright/test"
//import {LoginPage} from "../pages/LoginPage"
//import {HomePage} from "../pages/HomePage"
//import {CartPage} from "../pages/CartPage";
import {test} from '../fixtures/pom-fixtures'
import 
/*test("Verification of cart", async({page})=>{
    const loginPageObj = new LoginPage(page);//object
    await loginPageObj.openApplication();
    await loginPageObj.login("standard_user","secret_sauce");
    const homePageObj = new HomePage(page);
    await expect(homePageObj.homePageHeading).toHaveText("Swag Labs")
    await expect(homePageObj.backPackAddToCartButton).toBeVisible();
    await homePageObj.backPackAddToCart();
    await expect(homePageObj.cartIcon).toHaveText("1")
    await expect(homePageObj.backPackRemoveButton).toBeVisible();
    await homePageObj.goToCart();
    const cartPageObj = new CartPage(page);
    await expect(cartPageObj.backPackItemLink).toBeVisible();//.toHaveText("Sauce Labs Backpack")
})*/

test("Verification of cart", async({page,loginPage})=>{

    await loginPage.openApplication();
    await loginPage.login("standard_user","secret_sauce");
})

    test("Verification of cart2", async({page,loginPage})=>{
    console.log(process.env.BASE_URL);
    console.log(process.env.USER_NAME);
    console.log(process.env.PASSWORD);
    await loginPage.openApplication();
    await loginPage.login(process.env.USER_NAME!,process.env.PASSWORD!);
    })
