let expenses = [];
const budgetInput = document.getElementById("budget");
const nameInput = document.getElementById("expenseName");
const amountInput = document.getElementById("expenseAmount");
const expenseList = document.getElementById("expenseList");
const resultDiv = document.getElementById("result");

document.getElementById("addBtn").addEventListener("click", function(){
  let name = nameInput.value.trim();
  let amount = parseFloat(amountInput.value);
  if(name!== "" &&!isNaN(amount) && amount > 0){
    expenses.push({name: name, amount: amount});
    displayExpenses();
    nameInput.value = "";
    amountInput.value = "";
  }
});

document.getElementById("calculateBtn").addEventListener("click", function(){
  let budget = parseFloat(budgetInput.value) || 0;
  let total = 0;
  for(let i=0; i<expenses.length; i++){
    total += expenses[i].amount;
  }
  let balance = budget - total;
  let msg = "";
  if(balance >= 0){
    msg = "Within Budget - Good job!";
  } else {
    msg = "Overspent! Cut expenses.";
  }
  resultDiv.innerHTML = `
    <p>Total Expenses: KSH ${total}</p>
    <p>Remaining Balance: KSH ${balance}</p>
    <p>${msg}</p>
  `;
});

function displayExpenses(){
  expenseList.innerHTML = "";
  for(let exp of expenses){
    let li = document.createElement("li");
    li.textContent = exp.name.toUpperCase() + ": KSH " + exp.amount;
    expenseList.appendChild(li);
  }
}