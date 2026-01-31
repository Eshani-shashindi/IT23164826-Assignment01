# Copilot Instructions for IT23164826 - Singlish Translator

## Project Overview
This is a simple web-based Singlish to English translator application. The core functionality is implemented in a single HTML file with embedded JavaScript, featuring a dictionary-based translation system that replaces Singlish words/phrases with English equivalents.

## Architecture
- **Frontend**: Static HTML/CSS/JS application (`translator.html`)
- **Translation Logic**: Client-side JavaScript dictionary lookup with regex-based word replacement
- **Testing**: Playwright end-to-end tests driven by Excel test data
- **Data Flow**: User inputs text → JavaScript processes against dictionary → Output displayed in textarea

## Key Components
- `translator.html`: Main application with UI and translation logic
- `tests/example.spec.js`: Data-driven Playwright tests
- `testdata/it23164826.xlsx`: Excel file containing test cases with TC ID, input, expected output
- `playwright.config.js`: Configured for Chromium browser, headless: false

## Developer Workflows

### Running the Application
```bash
npx http-server -p 3000
```
Access at http://localhost:3000/translator.html

### Running Tests
1. Start the application server (see above)
2. Execute tests: `npx playwright test`
3. View reports: Open `playwright-report/index.html`

### Test Structure
- Tests are data-driven from Excel rows
- Negative test cases prefixed with "Neg_" use `test.fail()` to expect failures
- Only runs on Chromium browser
- Assertions compare trimmed output text

## Patterns & Conventions

### Translation Dictionary
- Stored as JavaScript object in `translator.html`
- Empty string values remove words entirely (e.g., 'lah': '')
- Multi-word phrases handled by sorting replacements longest-first
- Word boundaries (`\b`) ensure whole-word matching
- Auto-capitalizes first letter of output

### Test Selectors
- Input: `#inputText`
- Output: `#outputText`
- Buttons: `onclick` handlers for `translate()` and `clearText()`

### Excel Test Data Format
Columns: TC ID | Test case name | Input length type | Input | Expected output | ...
Filter rows where TC ID exists (handles merged cells)

### Dependencies
- `@playwright/test`: E2E testing
- `xlsx`: Excel file reading for test data
- No build tools - pure static files

## Common Tasks
- Add new Singlish words: Update dictionary object in `translator.html`
- Add test cases: Edit `testdata/it23164826.xlsx`
- Debug tests: Set `headless: false` in config, use `page.pause()` in tests</content>
<parameter name="filePath">c:\Users\PC\Desktop\IT23164826\.github\copilot-instructions.md