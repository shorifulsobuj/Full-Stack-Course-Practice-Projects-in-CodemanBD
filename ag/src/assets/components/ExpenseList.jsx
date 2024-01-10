function ExpenseList() {
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
            {/* row 1 */}
            <tr>
              <th>Bazar</th>
              <td>Household expense</td>
              <td>$40</td>
              <td>
                <button className="btn btn-accent">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ExpenseList;
