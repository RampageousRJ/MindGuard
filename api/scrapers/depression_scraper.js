import puppeteer from "puppeteer";

export const fetchDepressionArticles = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("https://psychcentral.com/depression")

    try {
        let images = await page.evaluate(() => document.querySelectorAll('.css-10vopkp'))
        console.log(images);
    } catch (error) {
        console.log(error);
    }

    try {
        let articles = await page.evaluate(() =>
            Array.from(document.querySelectorAll('.css-8sm3l3'),
                (e) => ({
                    title: e.querySelector('.css-1tyh178').textContent,
                    content: e.querySelector('.css-onvglr').textContent,
                    link: e.querySelector('.css-1tyh178').href,
                    img: 'https://qph.cf2.quoracdn.net/main-qimg-0481a6f0eba74b85625d2e116c9f6596-lq'
                })
            )
        )
        console.log(articles);
    } catch (error) {
        console.log(error);
    }
}
