import React from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import styles from "./Layout.module.css";
import { BottomNavigation } from "../navigation/BottomNavigation";
export const Layout = ({ setTheme, theme, children }) => {
  return (
    <>
      <Header setTheme={setTheme} theme={theme} />
      <main className={styles.main}>{children}</main>
      <Footer />
      <BottomNavigation />
    </>
  );
};
