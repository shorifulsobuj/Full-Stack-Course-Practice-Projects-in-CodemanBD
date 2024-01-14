import "./App.css";
import ExpenseList from "./assets/components/ExpenseList";

import Navbar from "./assets/components/Navbar";

function App() {
  const expenses = [
    {
      id: 1,
      category: "Utility",
      description: "House Utility Bill",
      amount: 700,
    },

    {
      id: 2,
      category: "Groceries",
      description: "Groceries for the house",
      amount: 400,
    },

    {
      id: 3,
      category: "Traval",
      description: "Traval Cost",
      amount: 3000,
    },

    {
      id: 4,
      category: "Car",
      description: "Tesla Car",
      amount: 4000,
    },

    {
      id: 5,
      category: "Book",
      description: "Progmaing Book",
      amount: 120,
    },

    {
      id: 6,
      category: "Hotel",
      description: "Hotel Room Booking",
      amount: 1040,
    },

    {
      id: 7,
      category: "Mobile",
      description: "Google Pixle Phone",
      amount: 2930,
    },

    {
      id: 8,
      category: "Bazar",
      description: "House hold expense",
      amount: 340,
    },

    {
      id: 9,
      category: "Food",
      description: "Fish Food",
      amount: 150,
    },

    {
      id: 10,
      category: "Laptop",
      description: "HP Laptop",
      amount: 990,
    },
    {
      id: 11,
      category: "Laptop",
      description: "aplle Laptop",
      amount: 950,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-[800px] mx-auto border-gray-700 border-2 p-4 rounded-xl mt-10">
        <ExpenseList expenses={expenses} />
      </div>
    </>
  );
}

export default App;
