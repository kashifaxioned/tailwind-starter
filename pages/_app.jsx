import React from "react";
import "../styles/globals.css";
import PropTypes from "prop-types";

export default function App({ Component }) {
  return <Component />;
}

App.propTypes = {
  Component: PropTypes.element,
};

App.defaultProps = {
  Component: PropTypes.undefined,
};
