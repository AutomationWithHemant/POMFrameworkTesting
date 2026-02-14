import {test} from '../../fixtures/hooks-fixture'

    /*test.beforeEach('Before each Hook',async({loginPage})=>{
        await loginPage.openApplication();
    })

    test.afterEach('After Each Hook',async({userPage})=>{
        await userPage.logout();
    })*/

    test("Verification of cart1", async({page,openApplication})=>{
    /*console.log(process.env.BASE_URL);
    console.log(process.env.USER_NAME);
    console.log(process.env.PASSWORD);*/


    //const CommonUtilsObj = new CommonUtils();
    //CommonUtilsObj.encryptData('secret_sauce')

    //const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    //const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);


    //await loginPage.openApplication();
    console.log(await page.url())
    //await loginPage.login(decryptedUserName,decryptedPassword);
    })
    
    test("Verification of cart2", async({page,openApplication})=>{
    //await loginPage.openApplication();
    console.log(await page.url())
    })

    test("Verification of cart3", async({page,openApplication,logout})=>{
    //await loginPage.openApplication();
    console.log(await page.url())
    })