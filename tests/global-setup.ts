import {test} from '../fixtures/common-fixtures'
import {expect} from '@playwright/test'

test('Global Setup for Auto Login', async({page,loginPage,homePage,commonUtils})=>{
  //  console.log(commonUtils.encryptData('Admin'))//secret_key hemant
  //  console.log(commonUtils.encryptData('admin123'))
    const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!); //secret_key = hemantGandhi
    const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPage.openApplication();
    await loginPage.login(decryptedUserName,decryptedPassword);
    await page.waitForURL(process.env.BASE_URL+'web/index.php/dashboard/index', { timeout: 15000 })
    await expect(homePage.dashboardTitleText).toHaveText('Dashboard');
    await page.waitForTimeout(2000);

    await page.context().storageState({
        path: './playwright/.auth/auth.json'
    })
})