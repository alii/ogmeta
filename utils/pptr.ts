import core, { ScreenshotOptions } from "puppeteer-core";
import { getOptions } from "./options";

let _page: core.Page | null;

async function getPage(isDev: boolean): Promise<core.Page> {
  if (_page) {
    return _page;
  }

  const options = await getOptions(isDev);
  const browser = await core.launch(options);

  _page = await browser.newPage();

  return _page;
}

export async function getScreenshot(
  html: string,
  type: ScreenshotOptions["type"],
  isDev: boolean
) {
  const page = await getPage(isDev);
  await page.setViewport({ width: 2048, height: 1170 });
  await page.setContent(html);
  await page.waitForNetworkIdle();

  return await page.screenshot({
    type,
  });
}
