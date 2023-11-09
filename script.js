class BudgetApp {
    constructor() {
        // Get references to the necessary HTML elements
        this.budgetElement = document.getElementById("budget");
        this.incomeForm = document.getElementById("income-form");
        this.expenseForm = document.getElementById("expense-form");
        this.incomeAmount = document.getElementById("income-amount");
        this.expenseAmount = document.getElementById("expense-amount");

        // Initialize the total budget to zero and update the initial budget display
        this.totalBudget = 0;
        this.updateBudgetDisplay();

        // Set up event listeners to handle user interactions
        this.setupEventListeners();
    }

    // Function to update the budget display with the current total budget
    updateBudgetDisplay() {
        this.budgetElement.textContent = `$${this.totalBudget.toFixed(2)}`;
    }

    // Function to add income to the budget
    addIncome(amount, description) {
        this.totalBudget += parseFloat(amount);
        // Create a new element to display the income item
        const incomeItem = document.createElement("div");
        incomeItem.textContent = `${description}: $${amount}`;
        this.incomeAmount.appendChild(incomeItem);
        // Update the budget display to reflect the change
        this.updateBudgetDisplay();
    }

    // Function to add an expense to the budget
    addExpense(amount, description) {
        this.totalBudget -= parseFloat(amount);
        // Create a new element to display the expense item
        const expenseItem = document.createElement("div");
        expenseItem.textContent = `${description}: $${amount}`;
        this.expenseAmount.appendChild(expenseItem);
        // Update the budget display to reflect the change
        this.updateBudgetDisplay();
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
        this.updateBudgetDisplay();
        this.clearIncomeForm();
        this.clearExpenseForm();
        this.clearExpenseList();
        this.clearIncomeList();
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

// Create an instance of the BudgetApp class to initialize the application
const budgetApp = new BudgetApp();
