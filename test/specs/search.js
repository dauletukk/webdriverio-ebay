describe('Ebay Product Search', () => {
    it('should open the main paige and verify title', () => {
        browser.url('https://www.ebay.com/');
        expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
    })

    it('should search for a product and verify the search text value', () => {
        const searchInput = $('#gh-ac');
        const searchBtn = $('#gh-btn');

        searchInput.addValue('Laptop');
        searchBtn.click();

        expect(searchInput).toHaveValue('Laptop');
    })

    it('should open the main paige and verify title', () => {
        expect(browser).toHaveTitle('Laptop | eBay');
    })

    it('should update the search category', () => {
        const category = $('#gh-cat option:nth-child(1)');

        expect(category).toHaveText('PC Laptops & Netbooks');
    })
})