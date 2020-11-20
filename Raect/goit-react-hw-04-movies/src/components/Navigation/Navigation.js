import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          to={routes.home}
          className="Nav-link"
          activeClassName="Nav-link-active"
          exact
        >
          HomePage
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movies}
          className="Nav-link"
          activeClassName="Nav-link-active"
        >
          MoviesPage
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
