import {test as baseTest} from './common-fixtures'

type HookFixtureType = {
    openApplication: any;
    logout: any;
}

export const test = baseTest.extend<HookFixtureType>({
    openApplication: async({loginPage},use)=>{
        await loginPage.openApplication();
        await use();
    },
    logout: async({userPage},use)=>{
        await use();
        await userPage.logout();
    }
})