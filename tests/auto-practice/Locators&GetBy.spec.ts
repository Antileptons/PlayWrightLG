import { test,expect } from "../../Fixtures";


test('Verify_Moxfield_Logo_Button',async ({moxHomePage}) => {

    await expect(moxHomePage.logoButton).toBeVisible

});


test ('Verify_Moxfield_Middle_Logo',async ({moxHomePage}) => {

    await expect(moxHomePage.middleLogo).toBeVisible

});

