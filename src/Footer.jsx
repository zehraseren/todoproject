import React from "react";

export default function Footer() {
  const date = new Date();
  return (
    <footer>
      <p>Copyright {date.getFullYear()} | Zehra Şeren</p>
    </footer>
  );
}
