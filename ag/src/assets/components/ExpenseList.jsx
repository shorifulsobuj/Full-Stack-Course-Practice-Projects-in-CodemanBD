/* eslint-disable react/prop-types */
function ExpenseList({ expenses }) {
  // console.log(props.expenses);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-gray-300 text-xl">
              <th>Category</th>
              <th>Description</th>
              <th>Amount ($)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expenses) => (
              <tr key={expenses.id}>
                <th>{expenses.category}</th>
                <td>{expenses.description}</td>
                <td>{expenses.amount}</td>
                <td>
                  <button className="btn btn-accent">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ExpenseList;
