# SpendWise - JavaScript Foundation

## What it does
SpendWise collects a monthly budget and 3 expenses via prompts, calculates total expenses and remaining balance, and displays a labeled report in the console.

## How variables are used
- `monthlyBudget` (number) stores budget
- `expense1Desc`, `expense2Desc`, `expense3Desc` (string) store descriptions
- `expense1Amount`, etc. (number) store amounts
- `totalExpenses`, `remainingBalance` (number) store calculations

## Data types used
- String: expense descriptions
- Number: budget and amounts (converted with Number())
- The variables demonstrate proper initialization

## How user input is collected
- Using `prompt()` for budget and each expense description/amount
- `Number()` converts amount input from string to number
- Stored in variables in `getUserInput()` function

## How calculations are performed
- `calculateTotalExpenses()`: `totalExpenses = expense1Amount + expense2Amount + expense3Amount`
- `calculateRemaining()`: `remainingBalance = monthlyBudget - totalExpenses`

## How functions help organize code
- `getUserInput()` - handles all prompts
- `calculateTotalExpenses()` - reusable total logic
- `calculateRemaining()` - reusable balance logic
- `checkBudgetStatus()` - returns budget status message
- `displayResults()` - handles all console.log output
- `runSpendWise()` - main flow controller

## Setup
1. Keep index.html, style.css, script.js in same folder
2. Open index.html with Live Server
3. Answer prompts, open DevTools Console (F12) to view report



<img width="689" height="300" alt="{1BF0AC89-64E2-4EC6-A4D2-0552CC325EB7}" src="https://github.com/user-attachments/assets/19ab0f3c-e75f-4dc5-a4b8-bd0e0f3a0f2e" />
