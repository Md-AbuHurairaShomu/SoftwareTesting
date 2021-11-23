const playwright = require('playwright');

(async () => {

    
    const browser = await playwright["chromium"].launch({
        headless: false,
        devtools: true
    });

    
    const context = await browser.newContext();

    
    const page = await context.newPage();

    
    await page.goto("https://www.bdjobs.com/");

    var waitPeriod = 1;
    await page.waitForResponse(response => {
        console.log("Starting to wait .... " + waitPeriod);
        waitPeriod++;
        return response.request().resourceType() === "xhr"
    })

    await page.screenshot({path: `bdjobs-${Date.now}.png`});

    await browser.close();

})();