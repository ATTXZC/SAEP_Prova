import React from 'react';
import "../CSS/Slidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">Sabor do Brasil</div>
      <div className="metrics">
        <div><span>9</span> Quantidade Likes</div>
        <div><span>12</span> Quantidade Dislikes</div>
      </div>
      <button className="login-button">Entrar</button>
    </aside>
  );
}

export default Sidebar;
