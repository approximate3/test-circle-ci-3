describe('Carousel', async () => {

    it('Carousel Title should exist', async () => {
        await browser.url(`https://caas-chimera.s3.us-west-1.amazonaws.com/carousel/3up/half-card.html`);
        await browser.setTimeout({ 'script': 50000 });
        const title = await $('.consonant-CarouselInfo-collectionTitle').getText();
        await expect(title).toEqual('Lorem Ipsums');
    });

    it('All cards should appear', async () => {
        await browser.url(`https://caas-chimera.s3.us-west-1.amazonaws.com/carousel/3up/half-card.html`);
        await browser.setTimeout({ 'script': 50000 });
        const grid = await $('.consonant-CardsGrid');
        await expect(grid).toHaveChildren(8);
    });

    it('You should be able to click to the next page', async () => {
        await browser.url(`https://caas-chimera.s3.us-west-1.amazonaws.com/carousel/3up/half-card.html`);
        await browser.setTimeout({ 'script': 50000 });
        const nextButton = await $('.consonant-Button--next');
        await nextButton.click();
        let prevButton = await $('.consonant-Button--previous');
        await expect(prevButton).toBeDisplayed();
    });

    it('You should be able to click and drag a card', async () => {
        await browser.url(`https://caas-chimera.s3.us-west-1.amazonaws.com/carousel/3up/half-card.html`);
        await browser.setTimeout({ 'script': 50000 });
        const elem = await $('.consonant-Card');
        await elem.dragAndDrop({ x: 500, y: 0 });
        let prevButton = await $('.consonant-Button--previous');
        await expect(prevButton).toBeDisplayed();
    });
});

