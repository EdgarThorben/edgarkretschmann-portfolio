const { chromium } = require('playwright');

(async () => {
  const url = process.argv[2];
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto(url, { waitUntil: 'networkidle' });

  // Extracting specific data for Gemini to digest
  const data = await page.evaluate(() => {
    return {
      title: document.title,
      fonts: [...document.querySelectorAll('link[rel="stylesheet"]')].map(l => l.href),
      colors: window.getComputedStyle(document.body).backgroundColor,
      html: document.body.innerText.slice(0, 2000) // Just the text structure to save tokens
    };
  });

  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();