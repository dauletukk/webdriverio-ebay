import { expect as chaiExpect, assert } from 'chai';
import 'chai/register-should';

describe('Watches Page', () => {
    it('should show the banner container', () => {
        browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
        const promoBanner = $('//body/div[3]/div[3]/div[4]/section[1]');

        expect(promoBanner).toBeDisplayed();
    })

    it('should show the banner title', () => {
        const infoTitle = $('//body/div[3]/div[3]/div[4]/section[1]');
        const infoTitleText = infoTitle.getText();

        console.log(infoTitleText)
        expect(infoTitle).toHaveTextContaining('Rolex');
        chaiExpect(infoTitleText).to.not.be.empty;
        infoTitleText.should.not.be.empty;
        assert.isNotEmpty(infoTitleText);
    })

    it('should contain link on banner button and verify its clickable', () => {
        const shopButton = $('//body/div[3]/div[3]/div[4]/section[1]/div[1]/a[1]');
        const tag = shopButton.getTagName();

        expect(shopButton).toHaveLinkContaining('fashion');
        expect(shopButton).toBeClickable();
        chaiExpect(tag).to.equal('a');
        tag.should.be.equal('a');
    })

    it('should click on the shop button and verify the new url', () => {
        const shopButton = $('//body/div[3]/div[3]/div[4]/section[1]/div[1]/a[1]');
        shopButton.click();

        const url = browser.getUrl();
        chaiExpect(url).to.include('/fashion/');
    })
})