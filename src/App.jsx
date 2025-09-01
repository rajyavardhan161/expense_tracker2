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
    <div className="main">
      <h1 className="heading">Add Expenses</h1>

      <input
        type="number"
        placeholder="Expense Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="input-field"
      />
      <br />

      <input
        type="text"
        placeholder="Expense Detail"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        className="input-field"
      />

      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="input-field"
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

      <div className="table">
        <div className="table-header">
          <p>S.NO</p>
          <p>Date</p>
          <p>Detail</p>
          <p>Amount</p>
        </div>

        {expenses.map((exp, i) => (
          <div key={i} className="table-row">
            <p>{i + 1}</p>
            <p>{exp.date}</p>
            <p>{exp.detail}</p>
            <p>{exp.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;