import {Locator,Page} from "@playwright/test"

export class HomePage{
    readonly page: Page;
    readonly homePageHeading : Locator;
    readonly backPackAddToCartButton : Locator;
    readonly backPackRemoveButton : Locator;
    readonly cartIcon : Locator;
    readonly pageTitle :Locator;
    constructor(page: Page){
        this.page = page;
        this.homePageHeading = page.getByText('Swag Labs')
        this.backPackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.backPackRemoveButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]')
        this.pageTitle = page.locator('.title')
        this.pageTitle = page.locator('.title')
    }

    async backPackAddToCart()
    {
        await this.backPackAddToCartButton.click();
    }

    async goToCart()
    {
        this.cartIcon.click();
    }
}