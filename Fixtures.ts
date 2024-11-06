import {test as base,expect,Page } from '@playwright/test'
import MoxHomePage from './pages/Moxfield/HomePage'

type MyFixtures = {

    moxHomePage: MoxHomePage;

}

export const test = base.extend<MyFixtures> ({

    moxHomePage:async ({page},use ) => {
        const moxfieldPage = new MoxHomePage(page);
        await moxfieldPage.goto();
        await use( moxfieldPage);

    },

    

});

export { expect } from '@playwright/test';