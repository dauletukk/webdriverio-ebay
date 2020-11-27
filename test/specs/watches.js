import { expect as chaiExpect } from 'chai';

describe('Watches Page', () => {
    it('should show the banner container', () => {
        browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
        const promoBanner = $('//body/div[3]/div[3]/div[4]/section[1]');

        expect(promoBanner).toBeDisplayed();
    })

    it('should show the banner title', () => {
        const infoTitle = $('//body/div[3]/div[3]/div[4]/section[1]');

        expect(infoTitle).toHaveTextContaining('Rolex');
    })

    it('should contain link on banner button and verify its clickable', () => {
        const shopButton = $('//body/div[3]/div[3]/div[4]/section[1]/div[1]/a[1]');

        expect(shopButton).toHaveLinkContaining('fashion');
        expect(shopButton).toBeClickable();
    })

    it('should click on the shop button and verify the new url', () => {
        const shopButton = $('//body/div[3]/div[3]/div[4]/section[1]/div[1]/a[1]');
        shopButton.click();

        const url = browser.getUrl();
        chaiExpect(url).to.include('/fashion/');
        expect(browser).toHaveUrl('https://www.ebay.com/e/fashion/rolex-021720');
    })
})