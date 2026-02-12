import {test} from '../../fixtures/hooks-fixture'

test('API Testing',async({request}) =>{
    const bookingIds = await request.get('/booking');
    console.log(await bookingIds.json());
})

test("API Testing 2",async({request})=>{
    const bookingDetails = await request.get('booking/2');
    console.log(await bookingDetails.json())
})