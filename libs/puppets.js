const puppeteer = require('puppeteer')


let browser = null;

exports.getBrowser = async function getBrowser(){
    if(!browser){

        //configuración del navegador va aquí
        browser = await puppeteer.launch({
            //se muestra o no
            headless: false,
            defaultViewport: {width: 768, height: 1024},
            devtools: false
        });
    }

    return browser;
}


exports.closeBrowser = async function close(browser){
    await browser.close();
};