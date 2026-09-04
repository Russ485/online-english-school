import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const VIEWPORTS = [
  { name: "375", width: 375, height: 800 },
  { name: "768", width: 768, height: 1024 },
  { name: "1280", width: 1280, height: 800 },
] as const;

const SECTION_NAMES = [
  "hero",
  "benefits",
  "pricing",
  "howitworks",
  "testimonials",
  "faq",
  "footer",
] as const;

test.describe("baseline", () => {
  for (const vp of VIEWPORTS) {
    test(`baseline ${vp.name}px`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/", { waitUntil: "networkidle" });

      // wait for hero visible - proves page rendered
      await expect(page.locator("main > section").first()).toBeVisible();

      // main contains 6× <section> + 1× <footer> = 7 blocks per PRODUCT.md
      const sections = page.locator("main > section, main > footer");
      const count = await sections.count();
      // expect 7 blocks (Hero/Benefits/Pricing/HowItWorks/Testimonials/FAQ + Footer)
      expect(count).toBe(7);

      const outDir = path.join(process.cwd(), "screenshots", "baseline");
      fs.mkdirSync(outDir, { recursive: true });

      // full page per viewport
      const fullPath = path.join(outDir, `${vp.name}-full.png`);
      await page.screenshot({ path: fullPath, fullPage: true });
      await testInfo.attach(`${vp.name}-full`, {
        path: fullPath,
        contentType: "image/png",
      });

      // per-section crops
      for (let i = 0; i < count; i++) {
        const name = SECTION_NAMES[i] ?? `section-${i + 1}`;
        const loc = sections.nth(i);
        await expect(loc).toBeVisible();
        // scroll into view for stable crop
        await loc.scrollIntoViewIfNeeded();
        const p = path.join(outDir, `${vp.name}-${String(i + 1).padStart(2, "0")}-${name}.png`);
        await loc.screenshot({ path: p });
        await testInfo.attach(`${vp.name}-${name}`, {
          path: p,
          contentType: "image/png",
        });
      }
    });
  }
});
