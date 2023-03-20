import React from "react";

function HeaderItem({ menu }) {
  return (
    <div className="header-item">
      <p>{menu.name}</p>
    </div>
  );
}

export default HeaderItem;