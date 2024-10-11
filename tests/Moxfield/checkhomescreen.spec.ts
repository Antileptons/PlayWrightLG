import { test,expect } from "../../Fixtures";

test('Verify Moxfield Home Screen',async ({moxHomePage}) => {

    await expect(moxHomePage.page).toHaveURL('https://www.moxfield.com/');



});