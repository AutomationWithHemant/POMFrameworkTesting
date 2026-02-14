import {test} from '../../fixtures/hooks-fixture'
import {expect} from '@playwright/test'
import apiPathData from '../../data/api-path-data.json'
import restfulApiData from '../../data/restful-booker-api-module-data.json'

/*test("API Test",async({request})=>{
    const bookingIds = await request.get("https://restful-booker.herokuapp.com/booking/");
    console.log(await bookingIds.json());
})

test("API Test 2",async({request})=>{
    const bookingDetails = await request.get("https://restful-booker.herokuapp.com/booking/1");
    console.log(await bookingDetails.json());
})*/

test("Id = 8 [RestFul-Booker > booking] Verify that the user is able to fetch all the booking Ids using GET API and receive valid response.",{
    tag:['@API','@UAT'],
     annotation: {
        type: "Test case link",
        description: "https://www.journeytoautomation.org"
    }
},async({request})=>{
   const bookingIdResp = await request.get(apiPathData.booking_path);
   const bookingIdJsonResp = await bookingIdResp.json();
   console.log(bookingIdJsonResp);
   expect(bookingIdResp.status()).toBe(200);
   expect(bookingIdResp.ok()).toBeTruthy();
   expect(bookingIdJsonResp).not.toBeNull();
   expect(bookingIdResp.headers()['content-type']).toBe(restfulApiData.content_type);
})

test("Id = 9 [RestFul-Booker > booking] Verify that the user is able to fetch booking details for a booking Id receive valid response.",{
    tag:['@API','@UAT'],
     annotation: {
        type: "Test case link",
        description: "https://www.journeytoautomation.org"
    }
},async({request})=>{
   const bookingIdResp = await request.get(`${apiPathData.booking_path}/${restfulApiData.booking_id}`);
   const bookingIdJsonResp = await bookingIdResp.json();
   console.log(bookingIdJsonResp);
   expect(bookingIdResp.status()).toBe(200);
   expect(bookingIdResp.ok()).toBeTruthy();
   expect(bookingIdJsonResp).not.toBeNull();
   expect(bookingIdJsonResp.firstname).toEqual(restfulApiData.first_name)
   //expect(bookingIdResp.headers()['content-type']).toBe(restfulApiData.content_type);
})

test("Id = 10 [RestFul-Booker > booking] Verify that the user is able to create a booking.",{
    tag:['@API','@UAT'],
     annotation: {
        type: "Test case link",
        description: "https://www.journeytoautomation.org"
    }
},async({request})=>{
    const createBookingResp = await request.post(apiPathData.booking_path,{
        data: restfulApiData.create_booking
    })
    const createBookingJsonResp = await createBookingResp.json();
    console.log(createBookingJsonResp)
    expect(createBookingResp.status()).toBe(200);
    expect(createBookingJsonResp.booking).toMatchObject(restfulApiData.create_booking)
})

test("Id = 11 [RestFul-Booker > booking] Verify that the user is able to update a booking with authentication.",{
    tag:['@API','@UAT'],
     annotation: {
        type: "Test case link",
        description: "https://www.journeytoautomation.org"
    }
},async({request})=>{
    const updateBookingResp = await request.put(`${apiPathData.booking_path}/${restfulApiData.booking_id2}`,{
            data: restfulApiData.update_booking
    });
    const updateBookingJsonResp = await updateBookingResp.json();
    console.log(updateBookingJsonResp);
    expect(updateBookingResp.status()).toBe(200);
    expect(updateBookingJsonResp).toMatchObject(restfulApiData.update_booking)
})

test("Id = 12 [RestFul-Booker > booking] Verify that the user is able to update a booking with cookies.",{
    tag:['@API','@UAT'],
     annotation: {
        type: "Test case link",
        description: "https://www.journeytoautomation.org"
    }
},async({request})=>{
    
})