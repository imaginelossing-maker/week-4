// Expense Tracker
//  first Keep a list of expenses

// Keep a list of student-related expenses
let expenses = [
  { id: 1, description: "Textbooks", amount: 12000, category: "Education" },
  { id: 2, description: "School Uniform", amount: 8000, category: "Clothing" },
  { id: 3, description: "Lunch at Canteen", amount: 3500, category: "Food" },
  { id: 4, description: "Transport to School", amount: 5000, category: "Travel" },
  { id: 5, description: "Stationery (Pens, Notebooks)", amount: 2500, category: "Education" },
  { id: 6, description: "Sports Equipment", amount: 7000, category: "Extracurricular" },
  { id: 7, description: "Library Fees", amount: 2000, category: "Education" },
  { id: 8, description: "Excursion Trip", amount: 10000, category: "Extracurricular" },
  { id: 9, description: "Science Lab Materials", amount: 6000, category: "Education" },
  { id: 10, description: "Health Checkup", amount: 4000, category: "Health" }
];


// Function to create an expense object
function createExpense(description, amount, category, id) {
  return {
    id: id,
    description: description,
    amount: amount,
    category: category
  };
}

// Function to get user choice
function getChoice() {
  let choice = prompt(`Enter an option:
    1. Add expense
    2. View all expenses
    3. Calculate total expenses
    4. Filter by category
    5. Delete expense
    6. Exit`);
  choice = parseInt(choice);
  return choice;
}

// Expense Manager
function expenseManager() {
  let choice = getChoice();
  let condition = true;
  let nextId = 1; // auto-increment ID

  while (condition) {
    switch (choice) {
      case 1:
        console.log(`Add expense`);
        let description = prompt(`Enter expense description`);
        let amount = parseFloat(prompt(`Enter expense amount`));
        let category = prompt(`Enter expense category`);

        if (amount <= 0 || isNaN(amount)) {
          alert(`Invalid amount! Please enter a positive number.`);
        } else {
          const newExpense = createExpense(description, amount, category, nextId++);
          expenses.push(newExpense);
          alert(`Expense added successfully`);
        }
        choice = getChoice();
        break;

      case 2:
        console.log(`View all expenses`);
        console.log(expenses);
        choice = getChoice();
        break;

      case 3:
        console.log(`Calculate total expenses`);
        const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
        console.log(`Total Expenses: ₦${total}`);
        choice = getChoice();
        break;

      case 4:
        console.log(`Filter by category`);
        let searchCategory = prompt(`Enter category`);
        const filtered = expenses.filter(exp => exp.category.toLowerCase() === searchCategory.toLowerCase());
        console.log(filtered);
        choice = getChoice();
        break;

      case 5:
        console.log(`Delete expense`);
        let deleteId = parseInt(prompt(`Enter expense ID to delete`));
        expenses = expenses.filter(exp => exp.id !== deleteId);
        alert(`Expense deleted successfully`);
        choice = getChoice();
        break;

      case 6:
        console.log(`Exit`);
        condition = false;
        break;

      default:
        console.log(`Invalid option, please try again`);
        choice = getChoice();
        break;
    }
  }
}

// Run the Expense Manager
expenseManager();
