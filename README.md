# 🕷️ Playwright Resume Scraper

A JavaScript + Playwright-based automation script to scrape internship listings from **Internshala**. Searches for a keyword (e.g., "Frontend Development"), visits each listing, and extracts all relevant job data.

---

## 🛠 Tech Stack
- Node.js
- Playwright

---

## 🚀 Setup & Run

```bash
git clone https://github.com/yourusername/playwright-resume-scraper.git
cd playwright-resume-scraper
npm install
npx playwright test --headed

---

# 📌 What It Scrapes
From each internship card:

✅ Job Title

🏢 Company Name

🌍 Location(s)

⏳ Duration

💰 Stipend

🛠️ Skills Required

📅 Apply By Date

🔗 Internship URL

🧠 Scraping Flow (Algorithm)
Launch browser via Playwright

Go to: https://internshala.com/internships

Fill search input (#keywordInput) with your term

Hit Enter & wait for results to load

Wait for .individual_internship elements

For each internship card:

Extract title, company, location, duration, stipend, apply date, skills, and URL

Click “Next” if pagination exists → repeat

Store or log the data

---

📎 Sample Code Snippet

await page.goto("https://internshala.com/internships");
await page.fill('#keywordInput', 'Frontend Development');
await page.keyboard.press('Enter');
await page.waitForSelector('.individual_internship');

const cards = await page.$$('.individual_internship');
for (const card of cards) {
  const title = await card.$eval('h3', el => el.textContent.trim());
  const company = await card.$eval('.company_name', el => el.textContent.trim());
  // Extract more fields similarly...
}
✅ Output Example
[
  {
    "title": "Frontend Development Intern",
    "company": "Tech Corp",
    "location": "Remote",
    "duration": "3 Months",
    "stipend": "₹10,000/month",
    "skills": ["HTML", "CSS", "JavaScript"],
    "apply_by": "August 15, 2025",
    "link": "https://internshala.com/internship/detail/123"
  }
]
🙌 Author
Made with 💻 + ☕ by Sayed Nowshad

---


Let me know if you want to turn this into a dynamic terminal app, add JSON export, or integrate storage next.


