function runSpendWise() {
    // REQUIREMENT 2: Store Application Data
    let userName = "";
    let monthlyBudget = 0;
    let rentExpense = 0;
    let foodExpense = 0;
    let transportExpense = 0;

    // REQUIREMENT 3: Collect User Input
    userName = prompt("Enter your name:");
    monthlyBudget = Number(prompt("Enter your monthly budget:"));
    rentExpense = Number(prompt("Enter Rent expense:"));
    foodExpense = Number(prompt("Enter Food expense:"));
    transportExpense = Number(prompt("Enter Transport expense:"));

    // REQUIREMENT 5: Create Reusable Functions
    function calculateTotalExpenses() {
        return rentExpense + foodExpense + transportExpense;
    }

    function calculateBalance() {
        return monthlyBudget - calculateTotalExpenses();
    }

    // REQUIREMENT 4: Perform Budget Calculations
    let total = calculateTotalExpenses();
    let balance = calculateBalance();

    // REQUIREMENT 6: Display Results in Console
    console.log("--- SpendWise Budget Summary ---");
    console.log("Name: " + userName);
    console.log("Monthly Budget: KSH " + monthlyBudget);
    console.log("Rent: KSH " + rentExpense);
    console.log("Food: KSH " + foodExpense);
    console.log("Transport: KSH " + transportExpense);
    console.log("Total Expenses: KSH " + total);
    console.log("Remaining Balance: KSH " + balance);

    if (balance < 0) {
        console.log("Status: Overspent!");
    } else {
        console.log("Status: Within budget");
    }

    // Show on page too
    document.getElementById("output").innerHTML = `
        <h3>Hello ${userName}</h3>
        <p>Budget: KSH ${monthlyBudget}</p>
        <p>Total: KSH ${total}</p>
        <p>Balance: KSH ${balance}</p>
    `;
}

// Auto-run
runSpendWise();