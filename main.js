const {getBrowser, closeBrowser} = require('./libs/puppets');

async function test(){
    const browser = await getBrowser();
    const pagePuppet = await browser.newPage();
    await pagePuppet.goto('https://www.google.com', {waitUntil:'load'});
    await closeBrowser(browser);
}

test();