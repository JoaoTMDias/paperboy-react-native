import React from "react";
import PropTypes from "prop-types";
import { View, StatusBar } from "react-native";

import styles from "./styles";

/**
 * ColoredStatusBar
 *
 * Functional Stateless Component
 */
const ColoredStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

ColoredStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired
};

export default ColoredStatusBar;
