import React from "react";

function FooterItem({ menu }) {
  return (
    <div className="footeritem-item">
      <p>{menu.name}</p>
    </div>
  );
}

export default FooterItem;