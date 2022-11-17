import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Kun dags dato</Link>
        </li>
      </ul>
    </nav>
  );
}
