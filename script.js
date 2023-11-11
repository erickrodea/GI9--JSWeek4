class Budget {
    constructor() {
        // Get references to the necessary HTML elements
        this.budgetElement = document.getElementById("budget");
        this.incomeForm = document.getElementById("income-form");
        this.expenseForm = document.getElementById("expense-form");
        this.incomeAmount = document.getElementById("income-amount");
        this.expenseAmount = document.getElementById("expense-amount");

        // Initialize the total budget, current income, and total expenses to zero
        this.totalBudget = 0;
        this.currentIncome = 0;
        this.totalExpenses = 0;
        this.updateBudgetDisplay();

        // Set up event listeners to handle user interactions
        this.setupEventListeners();
    }

    // Function to update the budget display with the current total budget
    updateBudgetDisplay() {
        this.budgetElement.textContent = `Total budget:  $${this.totalBudget.toFixed(2)}`;
    }

    // Function to add income to the budget
    addIncome(amount, description) {
        const incomeAmount = parseFloat(amount);
        this.totalBudget += incomeAmount;
        this.currentIncome += incomeAmount;

        // Create a new element to display the income item
        const incomeItem = document.createElement("div");
        incomeItem.textContent = `${description}: $${incomeAmount.toFixed(2)}`;
        this.incomeAmount.appendChild(incomeItem);
        //added animations to div items being created
        incomeItem.style.animation = 'fadeIn 3s';
        // Update the budget display and current income total
        this.updateBudgetDisplay();
        this.updateCurrentIncomeTotal();
    }

    // Function to add an expense to the budget
    addExpense(amount, description) {
        const expenseAmount = parseFloat(amount);
        this.totalBudget -= expenseAmount;
        this.totalExpenses += expenseAmount;

        // Create a new element to display the expense item
        const expenseItem = document.createElement("div");
        expenseItem.textContent = `${description}: $${expenseAmount.toFixed(2)}`;
        this.expenseAmount.appendChild(expenseItem);

        //adding animation to the div items being created
        expenseItem.style.animation = 'fadeIn 3s';

        // Update the budget display and total expenses
        this.updateBudgetDisplay();
        this.updateTotalExpenses();
    }

    // Function to update the display of the current income total
    updateCurrentIncomeTotal() {
        document.getElementById("current-income-total").textContent = `Current Income: $${this.currentIncome.toFixed(2)}`;
    }

    // Function to update the display of the total expenses
    updateTotalExpenses() {
        document.getElementById("current-expense-total").textContent = `Current Expenses: $${this.totalExpenses.toFixed(2)}`;
    }

    // Function to clear the input fields in the income form
    clearIncomeForm() {
        document.getElementById("income").value = "";
        document.getElementById("inc-desc").value = "";
    }

    // Function to clear the input fields in the expense form
    clearExpenseForm() {
        document.getElementById("expense").value = "";
        document.getElementById("exp-desc").value = "";
    }

    // Function to set up event listeners for form submissions and the reset button
    setupEventListeners() {
        // Event listener for the income form submission
        this.incomeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const income = document.getElementById("income").value;
            const incDesc = document.getElementById("inc-desc").value;
            if (income !== "" && incDesc !== "") {
                this.addIncome(income, incDesc);
                this.clearIncomeForm();
            }
        });

        // Event listener for the expense form submission
        this.expenseForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const expense = document.getElementById("expense").value;
            const expDesc = document.getElementById("exp-desc").value;
            if (expense !== "" && expDesc !== "") {
                this.addExpense(expense, expDesc);
                this.clearExpenseForm();
            }
        });

        // Event listener for the reset button
        document.getElementById("reset-button").addEventListener("click", () => {
            this.reset();
        });
    }

    // Function to reset the budget and clear lists of both expenses and income items
    reset() {
        this.totalBudget = 0;
        this.currentIncome = 0;
        this.totalExpenses = 0;
        this.updateBudgetDisplay();
        this.clearIncomeForm();
        this.clearExpenseForm();
        this.clearExpenseList();
        this.clearIncomeList();
        this.updateCurrentIncomeTotal();
        this.updateTotalExpenses();
    }

    // Function to clear the expense list
    clearExpenseList() {
        while (this.expenseAmount.firstChild) {
            this.expenseAmount.removeChild(this.expenseAmount.firstChild);
        }
    }

    // Function to clear the income list
    clearIncomeList() {
        while (this.incomeAmount.firstChild) {
            this.incomeAmount.removeChild(this.incomeAmount.firstChild);
        }
    }
}

// Create an instance of the Budget class to initialize the application
const budgetApp = new Budget();
