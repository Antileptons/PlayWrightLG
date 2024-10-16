import {Page,Locator} from '@playwright/test'

export default class MoxHomePage {

    readonly page: Page;
    readonly exploreButton: Locator;
    readonly comPrecButton: Locator;

    constructor (page: Page) {
        this.page = page;
        this.exploreButton = page.locator('xpath=//*[@id="mainmain-dropdown"]/ul[1]/li[2]/a');
        this.comPrecButton = page.locator('xpath=/html/body/div[2]/div/div/div[1]/a[2]/span[2]/span')
    }
    
    async goto () {
        await this.page.goto('https://www.moxfield.com/');
    }

    async clickoncprecons () {
        await this.exploreButton.click();
        await this.comPrecButton.click();
    }


}


