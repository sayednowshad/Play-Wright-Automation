test('Search and Click Front End Development Internship', async ({ page }) => {
  test.setTimeout(120000); // Set higher timeout

  await page.goto('https://internshala.com/internships', { waitUntil: 'domcontentloaded' });

  // Step 1: Close Internshala popup if visible
  const popup = page.locator('#close_popup');
  if (await popup.isVisible()) {
    await popup.click();
  }

  // ... (your other original steps)

  // Step 7: Wait 3 seconds after clicking
  await page.waitForTimeout(3000);

  // 🔽 Extracting Skills (More Robust Version)
  try {
    // Wait for "Skill(s) required" heading to appear
    await page.locator('h3.skills_heading').waitFor({ timeout: 10000 });

    const container = page.locator('.round_tabs_container');
    await container.waitFor({ timeout: 5000, state: 'attached' });

    const skillElements = container.locator('span.round_tabs');
    const count = await skillElements.count();
    const skills = [];

    for (let i = 0; i < count; i++) {
      const text = await skillElements.nth(i).innerText();
      skills.push(text.trim());
    }

    if (skills.length > 0) {
      console.log('✅ Extracted Skills:', skills);
    } else {
      console.log('⚠️ No skills found.');
    }
  } catch (err) {
    console.error('❌ Failed to extract skills:', err.message);
  }

  await page.screenshot({ path: 'clicked_card.png', fullPage: true });
  await page.pause();
});
