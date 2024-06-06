import { test } from "@playwright/test";
import fs from "fs";

const pageNames = JSON.parse(fs.readFileSync("targets.json")).targets;

const EXPECTED_BASE_URL = process.env.EXPECTED_BASE_URL;
const ACTUAL_BASE_URL = process.env.ACTUAL_BASE_URL;

test("capture screenshots production", async ({ page }) => {
  // capture expected screenshots
  for (const pageName of pageNames) {
    await page.goto(EXPECTED_BASE_URL + pageName);
    await page.waitForLoadState("networkidle");
    await page.screenshot({
      path: `.reg/expected/${pageName}.png`,
      fullPage: true,
    });
  }
});

test("capture screenshots staging", async ({ page }) => {
  // capture actual screenshots
  for (const pageName of pageNames) {
    await page.goto(ACTUAL_BASE_URL + pageName);
    await page.waitForLoadState("networkidle");
    await page.screenshot({
      path: `directory_contains_actual_images/${pageName}.png`,
      fullPage: true,
    });
  }
});
