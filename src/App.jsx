import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [detail, setDetail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [expenses, setExpenses] = useState([]);

  function addExpense() {
    if (!amount || (!detail && !selectedOption)) {
      alert("Please enter all details");
      return;
    }

    let expenseDetail = detail;
    if (selectedOption) expenseDetail = selectedOption;

    const today = new Date().toLocaleDateString("en-GB");

    setExpenses([
      ...expenses,
      { detail: expenseDetail, amount: Number(amount), date: today },
    ]);

    setAmount("");
    setDetail("");
    setSelectedOption("");
  }

  function viewExpenses() {
    localStorage.setItem("expensesData", JSON.stringify(expenses));
    window.open("/view-expense.html", "_blank");
  }

  return (
    <div className="main p-4">
      <h1 className="heading">Add Expenses</h1>
      <input
        type="number"
        placeholder="Expense Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-1 m-1"
      />
      <br />

      <input
        type="text"
        placeholder="Expense Detail"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        className="border p-1 m-1"
      />

      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="border p-1 m-1"
      >
        <option value="">Select</option>
        <option value="Fuel">Fuel</option>
        <option value="Hotel Bill">Hotel Bill</option>
        <option value="Services">Services</option>
        <option value="Other Expense">Other Expense</option>
      </select>
      <br />

      <button onClick={addExpense} className="btn">Add Expense</button>
      <button onClick={viewExpenses} className="btn">View Expense</button>

      <div className="mt-4">
        <div className="flex font-bold">
          <p className="px-4 border">S.NO</p>
          <p className="px-4 border">Date</p>
          <p className="px-4 border">Detail</p>
          <p className="px-4 border">Amount</p>
        </div>

        {expenses.map((exp, i) => (
          <div key={i} className="flex">
            <p className="px-4 border">{i + 1}</p>
            <p className="px-4 border">{exp.date}</p>
            <p className="px-4 border">{exp.detail}</p>
            <p className="px-4 border">{exp.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
