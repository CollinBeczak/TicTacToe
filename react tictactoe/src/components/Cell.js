import React from "react";

const Cell = ({ onClick, children }) => {
  return (
    <td className="cell" onClick={onClick}>
      {children}
    </td>
  );
};

export default Cell;
