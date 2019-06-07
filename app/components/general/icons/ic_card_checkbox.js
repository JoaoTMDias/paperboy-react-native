import React from "react";
import PropTypes from "prop-types";
import { Svg, Path } from "react-native-svg";

const IconCardCheckbox = props => (
  <Svg height="24" width="24" viewBox="0 0 24 24">
    <Path
      fill={props.fill}
      d="M10 17l-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8m-7-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z"
    />
  </Svg>
);

IconCardCheckbox.defaultProps = {
  fill: `#dad0d0`
};

IconCardCheckbox.propTypes = {
  fill: PropTypes.string
};

export default IconCardCheckbox;
