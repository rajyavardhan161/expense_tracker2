import { useEffect, useState } from "react";

function ViewExpense() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("expensesData");
    if (stored) {
      setExpenses(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="main">
      <h2 className="heading">Expense Statements</h2>
      <table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Date</th>
            <th>Detail</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{exp.date}</td>
              <td>{exp.detail}</td>
              <td>{exp.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ViewExpense;
