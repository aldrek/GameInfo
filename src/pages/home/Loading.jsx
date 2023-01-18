import React from "react";
import { ColorRing } from "react-loader-spinner";
import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperClass={styles.loading}
      wrapperStyle={{}}
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
};
