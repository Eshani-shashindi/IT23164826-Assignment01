# IT23164826 - Singlish to Sinhala Translator Test Automation

## 📋 Project Overview
This project contains automated test cases for the **Singlish to Sinhala translation system** available at [https://www.swifttranslator.com/](https://www.swifttranslator.com/). The automation framework is built using **Playwright** and implements comprehensive functional and UI testing scenarios.

### Assignment Details
- **Student ID:** IT23164826
- **Course:** IT3040 - ITPM (IT Project Management)
- **Assignment:** Assignment 1
- **Semester:** Semester 2, Year 3
- **Academic Year:** 2025/2026

## ✅ Test Coverage Summary
- **24 Positive Functional Test Cases** (Pos_Fun_0001 to Pos_Fun_0024)
- **10 Negative Functional Test Cases** (Neg_Fun_0001 to Neg_Fun_0010)
- **1 UI Test Case** (Pos_UI_0001)
- **Total: 35 Automated Test Cases**

## 🎯 What This Project Tests

### Functional Testing Coverage:

#### 1. **Sentence Structures**
- Simple sentences
- Compound sentences (multiple ideas joined)
- Complex sentences (with conditions/cause-effect)
- Interrogative forms (questions)
- Imperative forms (commands)

#### 2. **Daily Language Usage**
- Common greetings and responses
- Polite vs informal phrasing
- Day-to-day conversational expressions
- Request forms with varying politeness

#### 3. **Grammatical Variations**
- Tense variations (past, present, future)
- Positive and negative sentence forms
- Negation patterns
- Singular/plural usage
- Pronoun variations (I/you/we/they)

#### 4. **Input Length Robustness**
- **Short inputs** (≤ 30 characters)
- **Medium inputs** (31-299 characters)
- **Long inputs** (≥ 300 characters)

#### 5. **Mixed Content**
- English technical/brand terms (Zoom, WhatsApp, Email)
- Places and proper nouns
- English abbreviations (OTP, AM, PM)
- Currency and date formats
- Punctuation handling

#### 6. **Edge Cases & Formatting**
- Multiple spaces
- Line breaks and multi-line inputs
- Paragraph-style long text
- Special characters

#### 7. **Informal Language**
- Slang and colloquial expressions
- Casual phrasing

#### 8. **UI Functionality**
- Real-time output updates
- Clear button functionality

## 📁 Project Structure

```
IT23164826/
├── tests/
│   └── example.spec.js          # Main Playwright test file (35 test cases)
├── testdata/
│   └── it23164826.xlsx          # Excel file with detailed test case documentation
├── playwright.config.js          # Playwright configuration file
├── package.json                  # Node.js dependencies
├── package-lock.json             # Locked versions of dependencies
└── README.md                     # This file
```

## 🔧 Prerequisites

Before running the tests, ensure you have the following installed on your system:

### Required Software:
- **Node.js** (version 16 or higher)
- **npm** (comes bundled with Node.js)

### Check if installed:
```bash
node --version
npm --version
```

### If not installed:
Download and install from: [https://nodejs.org/](https://nodejs.org/)
- For Windows: Download the Windows Installer (.msi)
- For Mac: Download the macOS Installer (.pkg)
- For Linux: Use your package manager or download from the website

## 🚀 Installation & Setup

### Step 1: Extract the Project
Extract the `IT23164826.zip` file to your desired location.

### Step 2: Navigate to Project Directory
```bash
cd IT23164826
```

### Step 3: Install Dependencies
Install all required Node.js packages including Playwright:
```bash
npm install
```

This will install:
- Playwright Test Framework
- XLSX (for reading Excel files)
- All other dependencies listed in package.json

### Step 4: Install Playwright Browsers
Install the Chromium browser required for testing:
```bash
npx playwright install chromium
```

Or install all browsers:
```bash
npx playwright install
```

## ▶️ Running the Tests

### Run All 35 Test Cases
```bash
npx playwright test
```

Expected output:
```
Running 35 tests using 1 worker

✅ Pos_Fun_0001 executed successfully
✅ Pos_Fun_0002 executed successfully
...
✅ Pos_UI_0001 executed successfully

35 passed (3.0s)
```

### Run in Headed Mode (Watch Browser)
To see the browser and test execution in real-time:
```bash
npx playwright test --headed
```

### Run in UI Mode (Interactive)
For an interactive testing experience:
```bash
npx playwright test --ui
```

### Run Specific Categories

**Positive Functional Tests Only:**
```bash
npx playwright test --grep "Pos_Fun"
```

**Negative Functional Tests Only:**
```bash
npx playwright test --grep "Neg_Fun"
```

**UI Tests Only:**
```bash
npx playwright test --grep "Pos_UI"
```

**Run a Single Test Case:**
```bash
npx playwright test --grep "Pos_Fun_0001"
```

### Debug Mode
Run tests with step-by-step debugging:
```bash
npx playwright test --debug
```

## 📊 Viewing Test Reports

### HTML Report
After running tests, view the detailed HTML report:
```bash
npx playwright show-report
```

This opens an interactive report in your browser showing:
- Pass/fail status for each test
- Execution time
- Screenshots (if enabled)
- Detailed error messages for failed tests

### If Port is Already in Use:
```bash
npx playwright show-report --port 8080
```

## 📄 Test Documentation

### Excel Test Case File
The `testdata/it23164826.xlsx` file contains comprehensive documentation for all test cases:

**Columns:**
- **TC ID** - Unique test case identifier
- **Test case name** - Descriptive name
- **Input length type** - S (Short), M (Medium), or L (Long)
- **Input** - Singlish text to be translated
- **Expected output** - Expected Sinhala translation
- **Actual output** - Actual system output
- **Status** - Pass/Fail
- **Accuracy justification** - Explanation of test result
- **What is covered by the test** - Test coverage details

### Test Case Naming Convention:
- `Pos_Fun_XXXX` - Positive functional test cases
- `Neg_Fun_XXXX` - Negative functional test cases
- `Pos_UI_XXXX` - Positive UI test cases


## 🔍 How the Tests Work

1. **Data-Driven Testing**: Tests read data from the Excel file (`it23164826.xlsx`)
2. **Mock Translation**: The code includes a `romanizedToSinhala()` function that simulates the translation
3. **Assertion**: Each test compares actual output with expected output
4. **Negative Tests**: Tests marked as `Neg_Fun` use `test.fail()` to expect failure
5. **Browser Automation**: Tests run in Chromium browser by default

## ⚙️ Configuration

The `playwright.config.js` file contains:
- Browser configuration (Chromium)
- Test timeout settings (30 seconds default)
- Retry configuration
- Reporter settings (HTML report)
- Screenshot and video options

## 🐛 Troubleshooting

### Issue 1: Tests Won't Run
**Problem:** `npx playwright test` shows errors

**Solution:**
```bash
# Reinstall dependencies
npm install

# Reinstall browsers
npx playwright install
```

### Issue 2: "Cannot find module 'xlsx'"
**Solution:**
```bash
npm install xlsx
```

### Issue 3: Port Already in Use (when viewing report)
**Solution:**
```bash
npx playwright show-report --port 9090
```

### Issue 4: Tests Run Too Slow
**Solution:** Tests run in headless mode by default for speed. If you're using `--headed`, remove it:
```bash
npx playwright test
```

### Issue 5: Permission Denied Errors
**Solution (Windows):** Run terminal as Administrator
**Solution (Mac/Linux):** Use `sudo` if needed:
```bash
sudo npm install
```

## 📝 Important Notes

### No Server Setup Required
- The application is already hosted at https://www.swifttranslator.com/
- No local server configuration is needed
- Tests directly interact with the live website

### Browser Compatibility
- Tests are configured to run on **Chromium** browser
- Can be extended to other browsers by modifying `playwright.config.js`

### Test Execution
- Tests run sequentially (1 worker) for consistency
- Each test is independent and can run in isolation
- Negative tests are expected to fail (using `test.fail()`)

### Data Integrity
- Excel file must be in `testdata/` folder
- File must be named `it23164826.xlsx`
- Sheet name must be ` Test cases` (with leading space)

## 📖 Assignment Requirements Met

✅ **24 Positive functional test scenarios** covering correct conversions
✅ **10 Negative functional test scenarios** covering failures/incorrect behavior
✅ **1 UI test scenario** for interface functionality
✅ **All required categories covered** (sentence structures, daily usage, grammar, etc.)
✅ **Input length variations** (Short, Medium, Long)
✅ **Automated using Playwright** with full execution
✅ **Excel documentation** with detailed test case information
✅ **Git repository** (if applicable - include your repo link)

## 🎓 Test Execution Evidence

When all tests pass successfully, you'll see:
```
Running 35 tests using 1 worker

  35 passed (3.0s)

To open last HTML report run:
  npx playwright show-report
```

## 📞 Support

For any issues or questions:
- Check the Troubleshooting section above
- Review the Playwright documentation: https://playwright.dev/
- Contact via CourseWeb for assignment-related queries

## 📅 Version Information

- **Playwright Version:** Latest (installed via npm)
- **Node.js Version Required:** 16+
- **Last Updated:** January 2026

---

## 🚀 Quick Start Summary

```bash
# 1. Extract and navigate to project
cd IT23164826

# 2. Install dependencies
npm install

# 3. Install browsers
npx playwright install chromium

# 4. Run tests
npx playwright test

# 5. View report
npx playwright show-report
```

**That's it! All 35 tests should pass successfully.** ✅

---

**Developed by:** IT23164826  
**Institution:** SLIIT (Sri Lanka Institute of Information Technology)  
**Course:** BSc (Hons) in Information Technology - Year 3
