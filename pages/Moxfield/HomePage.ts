import {Page,Locator} from '@playwright/test'

export default class MoxHomePage {

    /* Class Properties */
    readonly page: Page;
    readonly exploreButton: Locator;
    readonly comPrecButton: Locator;
    readonly logoButton:    Locator;
    readonly middleLogo:    Locator;

    /* Constructor */
    constructor (page: Page) {
        this.page = page;
        this.exploreButton = page.locator('xpath=//*[@id="mainmain-dropdown"]/ul[1]/li[2]/a');
        this.comPrecButton = page.locator('xpath=/html/body/div[2]/div/div/div[1]/a[2]/span[2]/span');
        this.logoButton = page.getByRole("img",{name: 'Moxfield Logo'});
        this.middleLogo = page.getByAltText('Moxfield')
    }
    
    /* Methods */

    async goto () {
        await this.page.goto('https://www.moxfield.com/');
    }

    async clickoncprecons () {
        await this.exploreButton.click();
        await this.comPrecButton.click();
    }


}


