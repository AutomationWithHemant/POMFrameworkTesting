import {test} from '../fixtures/common-fixtures'

    test("Verification of cart2", async({page,loginPage,commonUtils})=>{
    /*console.log(process.env.BASE_URL);
    console.log(process.env.USER_NAME);
    console.log(process.env.PASSWORD);*/


    //const CommonUtilsObj = new CommonUtils();
    //CommonUtilsObj.encryptData('secret_sauce')

    const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);


    await loginPage.openApplication();
    await loginPage.login(decryptedUserName,decryptedPassword);
    })
