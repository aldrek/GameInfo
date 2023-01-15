import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { GiGamepad } from "react-icons/gi";
import useLocalStorage from "use-local-storage";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";

export const Header = ({ setTheme, theme }) => {
  const activeStyle = {
    color: "#fff",
  };

  const OnLogoClick = () => {
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
              to="/popluar"
              className={styles.link}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Popular
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              to="/Favorite"
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
            OnLogoClick();
          }}
        />
      </div>
    </div>
  );
};
