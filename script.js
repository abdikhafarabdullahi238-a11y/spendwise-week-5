// 2. Store Application Data - variables for budgeting
let monthlyBudget = 0;
let expense1Desc = "";
let expense1Amount = 0;
let expense2Desc = "";
let expense2Amount = 0;
let expense3Desc = "";
let expense3Amount = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// 5. Reusable Functions
function getUserInput() {
  // 3. Collect User Input
  monthlyBudget = Number(prompt("Enter your monthly budget (Ksh):"));
  expense1Desc = prompt("Enter expense 1 description:");
  expense1Amount = Number(prompt("Enter amount for " + expense1Desc + ":"));
  expense2Desc = prompt("Enter expense 2 description:");
  expense2Amount = Number(prompt("Enter amount for " + expense2Desc + ":"));
  expense3Desc = prompt("Enter expense 3 description:");
  expense3Amount = Number(prompt("Enter amount for " + expense3Desc + ":"));
}

function calculateTotalExpenses() {
  // 4. Perform Budget Calculations
  totalExpenses = expense1Amount + expense2Amount + expense3Amount;
  return totalExpenses;
}

function calculateRemaining() {
  remainingBalance = monthlyBudget - totalExpenses;
  return remainingBalance;
}

function checkBudgetStatus() {
  if (remainingBalance < 0) return "OVER BUDGET!";
  else if (remainingBalance === 0) return "Exactly on budget.";
  else return "Within budget. Good job!";
}

// 6. Display Results in browser console - clearly labeled
function displayResults() {
  console.log("===== SpendWise Budget Report =====");
  console.log("Monthly Budget: " + monthlyBudget + " Ksh");
  console.log("-----------------------------------");
  console.log("Expense 1: " + expense1Desc + " - " + expense1Amount + " Ksh");
  console.log("Expense 2: " + expense2Desc + " - " + expense2Amount + " Ksh");
  console.log("Expense 3: " + expense3Desc + " - " + expense3Amount + " Ksh");
  console.log("-----------------------------------");
  console.log("Total Expenses: " + totalExpenses + " Ksh");
  console.log("Remaining Balance: " + remainingBalance + " Ksh");
  console.log("Status: " + checkBudgetStatus());
  console.log("===================================");
}

function runSpendWise() {
  getUserInput();
  calculateTotalExpenses();
  calculateRemaining();
  displayResults();
  document.getElementById('output').innerHTML =
    `<p><strong>Check console (F12) for full report</strong></p>
     <p>Budget: ${monthlyBudget} Ksh</p>
     <p>Total: ${totalExpenses} Ksh</p>
     <p>Remaining: ${remainingBalance} Ksh</p>`;
}

// 1. Set Up JavaScript - runs on load
runSpendWise();