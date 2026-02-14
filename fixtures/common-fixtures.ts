import {test as baseTest} from "../fixtures/pom-fixtures"
import CommonAPIUtils from "../utils/CommonAPIUtils"
import CommonUtils from '../utils/CommonUtils'

type CommonFixtureType = {
    commonUtils : CommonUtils,
    commonAPIUtils : CommonAPIUtils
}

export const test = baseTest.extend<CommonFixtureType>({
    commonUtils : async({},use)=>{
     use(new CommonUtils());
    },
    commonAPIUtils: async({request},use)=>{
        use(new CommonAPIUtils(request));
    }
})