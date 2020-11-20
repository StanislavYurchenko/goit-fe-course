import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h2> вы потерялись </h2>
      <p>
        <Link>Ссылка</Link>
        на главную страницу
      </p>
    </>
  );
}

export default NotFound;
