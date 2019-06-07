import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';


/**
* ScrollTabViewContainer
*
* Functional Stateless Component
*/
const TabViewContainer = ({ tabLabel, children }) => (
  <View tabLabel={tabLabel} style={styles.container}>
    {children}
  </View>
);

TabViewContainer.propTypes = {
  children: PropTypes.any,
  tabLabel: PropTypes.string,
};

export default TabViewContainer;
