import {test} from '../fixtures/pom-fixtures'
//import {expect} from '@playwright/test'
import CommonUtils from '../utils/CommonUtils';

test("Temp test", async({page,loginPage})=>{
    console.log(process.env.BASE_URL);
    console.log(process.env.USER_NAME);
    console.log(process.env.PASSWORD);


    const commonUtilsObj = new CommonUtils();
    commonUtilsObj.encryptData('secret_sauce')

    console.log(commonUtilsObj.decryptData(process.env.USER_NAME!));
    console.log(commonUtilsObj.decryptData(process.env.PASSWORD!));

    //console.log(decryptedUserName)
    //console.log(decryptedPassword)
    //await loginPage.openApplication();
    //console.log(await page.title());
    //page.waitForTimeout(150000);
    //await loginPage.login(decryptedUserName,decryptedPassword);
    //page.waitForTimeout(1150000);
})