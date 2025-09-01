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
    <div style={{ background: "white", minHeight: "100vh", padding: "20px" }}>
      <h2 className="text-xl font-bold mb-4">Expense Statements</h2>

      <table className="border-collapse border w-full">
        <thead>
          <tr>
            <th className="border p-2">S.NO</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Detail</th>
            <th className="border p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp, i) => (
            <tr key={i}>
              <td className="border p-2">{i + 1}</td>
              <td className="border p-2">{exp.date}</td>
              <td className="border p-2">{exp.detail}</td>
              <td className="border p-2">{exp.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewExpense;
