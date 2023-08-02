const puppeteer = require('puppeteer')


(async()=>{
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
})();


async function loadUrl(page, url, browser){
    await page.goto(url, {
        waitUntil:["load", "domcontentloaded", "networkkidle0", "networkkidle2"]
    });

    const valorEncontrado = await page.$eval("", el=>el.innerHTML);
    console.log("Valor encontrado: " + valorEncontrado);
    await browser.close();
}