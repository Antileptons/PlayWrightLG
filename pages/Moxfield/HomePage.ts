import {Page,Locator} from '@playwright/test'

export default class MoxHomePage {

    readonly page: Page;

    constructor (page: Page) {
        this.page = page;

    }
    
    async goto () {
        await this.page.goto('https://www.moxfield.com/');
    }



}


