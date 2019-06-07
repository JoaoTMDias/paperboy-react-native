import React, { PureComponent } from "react";
import * as Animatable from "react-native-animatable";
import { Platform, ImageBackground, View, Image, Text } from "react-native";
import styled from "styled-components";

import styles from "./styles";

/**
 * NewsSourcesFeaturedItem
 *
 * Functional Stateless Component
 */
class NewsSourcesFeaturedItem extends PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };
  render() {
    const SourceImage = `https://paperboy-icon-service.herokuapp.com/icon?url=${this.props.uri}&size=70..120..200`;
    return (
      <Animatable.View
        animation="fadeInRight"
        easing="ease-out-expo"
        delay={64}
        useNativeDriver
        style={styles.container}
      >
        <Image resizeMode="cover" source={{ uri: SourceImage }} style={styles.image} />
        <View style={styles.meta}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {this.props.title}
          </Text>
          <Text style={styles.category}>{this.props.category}</Text>
        </View>
      </Animatable.View>
    );
  }
}

export default NewsSourcesFeaturedItem;
