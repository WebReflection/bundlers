const puppeteer = require('puppeteer');
const bundler = process.argv[2].slice(0, -3);

console.log('\x1b[1m' + bundler + '\x1b[0m');

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/${bundler}.html`);
  try {
    if (
      typeof(await page.evaluate(() => module)) ===
      typeof(require('../cjs/module'))
    ) {
      await browser.close();
      console.log('');
      process.exit(0);
    } else {
      throw new Error('unexpected result');
    }
  } catch(e) {
    await browser.close();
    console.error(e);
    process.exit(1);
  }
})();