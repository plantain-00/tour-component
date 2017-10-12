import * as puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.emulate({ viewport: { width: 1440, height: 900 }, userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36" });

    for (const type of ["vue", "react", "angular"]) {
        await page.goto(`http://localhost:8000/demo/${type}`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-initial.png`, fullPage: true });

        for (let i = 1; i <= 4; i++) {
            const next = await page.$(".tour-next-tip");
            await next.click();
            await page.waitFor(100);
            await page.screenshot({ path: `screenshots/${type}-next-${i}.png`, fullPage: true });
        }

        const cleanLocalstorage = await page.$("button");
        await cleanLocalstorage.click();
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-reset.png`, fullPage: true });

        const close = await page.$(".tour-close-tip");
        await close.click();
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-close.png`, fullPage: true });

        await cleanLocalstorage.click();
    }

    browser.close();
})();
