/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import "../styles/globals.css";

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-filename-extension
  return <Component {...pageProps} />;
}
