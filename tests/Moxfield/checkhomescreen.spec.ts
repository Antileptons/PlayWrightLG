import { test,expect } from "../../Fixtures";
import MoxHomePage from "../../pages/Moxfield/HomePage";

test('Verify Moxfield Home Screen',async ({moxHomePage}) => {

    await expect(moxHomePage.page).toHaveURL('https://www.moxfield.com/');

});

test('Verify Commander Precon Page',async ({moxHomePage}) => {

    await moxHomePage.clickoncprecons();
    await expect(moxHomePage.page).toHaveURL('https://www.moxfield.com/decks/public?format=commanderPrecons')

});