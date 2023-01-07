import React from "react";

function AdminNavBar({ onChangePage }) {
  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>New Question</button>
      <button onClick={() => onChangePage("Pizza")}>View Questions</button>
    </nav>
  );
}

export default AdminNavBar;
