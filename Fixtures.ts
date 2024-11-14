import {test as base,expect,Page } from '@playwright/test'
import MoxHomePage from './pages/Moxfield/HomePage'
import DecksPage from './pages/Moxfield/DecksPage';

type MyFixtures = {

    moxHomePage: MoxHomePage;
    decksPage: DecksPage;

}

export const test = base.extend<MyFixtures> ({

    moxHomePage:async ({page},use ) => {
        const moxfieldPage = new MoxHomePage(page);
        await moxfieldPage.goto();
        await use( moxfieldPage);

    },

    decksPage:async ({page},use ) => {
        const moxfieldPage = new DecksPage(page);
        await use( moxfieldPage);

    }

    

});

export { expect } from '@playwright/test';