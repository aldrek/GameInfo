import React from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Route, Routes } from "react-router-dom";
import styles from "./Layout.module.css";
export const Layout = ({ setTheme, theme, children }) => {
  return (
    <>
      <Header setTheme={setTheme} theme={theme} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
