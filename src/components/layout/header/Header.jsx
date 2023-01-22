import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { GiGamepad } from "react-icons/gi";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";

export const Header = ({ setTheme, theme }) => {
  const activeStyle = {
    color: "#fff",
  };

  const OnToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/">
          {" "}
          <GiGamepad className={styles.logo} />
        </NavLink>

        <nav className="navigation">
          <li>
            <NavLink
              to="/"
              className={styles.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>{" "}
          </li>

          <li>
            {" "}
            <NavLink
              to="/category"
              className={styles.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Category
            </NavLink>{" "}
          </li>

          <li>
            {" "}
            <NavLink
              to="/favorite"
              className={styles.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Favorite
            </NavLink>{" "}
          </li>
        </nav>

        <DarkModeToggle
          mode={theme}
          size="md"
          className={styles.toggle}
          inactiveTrackColor="#e2e8f0"
          inactiveTrackColorOnHover="#f8fafc"
          inactiveTrackColorOnActive="#cbd5e1"
          activeTrackColor="#334155"
          activeTrackColorOnHover="#1e293b"
          activeTrackColorOnActive="#0f172a"
          inactiveThumbColor="#1e293b"
          activeThumbColor="#e2e8f0"
          onChange={(mode) => {
            OnToggle();
          }}
        />
      </div>
    </div>
  );
};
