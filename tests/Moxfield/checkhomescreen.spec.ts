import { test,expect } from "../../Fixtures";


test('Verify Moxfield Home Screen',async ({moxHomePage}) => {

    await expect(moxHomePage.page).toHaveURL('https://www.moxfield.com/');

});

test('Verify Commander Precon Page',async ({moxHomePage,decksPage}) => {

    await moxHomePage.clickoncprecons();
    await expect(decksPage.page).toHaveURL('https://www.moxfield.com/decks/public?q=eyJmb3JtYXQiOiJjb21tYW5kZXJQcmVjb25zIn0=')

});