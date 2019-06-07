import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";
import { BlurView } from "expo";

import styles from "./styles";

/**
 * SourcesButtonBar
 *
 * Functional Stateless Component
 */
const SourcesButtonBar = props => (
  <View style={styles.container}>
    <BlurView tint="light" intensity={64} style={StyleSheet.absoluteFill} style={styles.blurView}>
      <Button block style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonTitle}>{props.title}</Text>
      </Button>
    </BlurView>
  </View>
);

export default SourcesButtonBar;
