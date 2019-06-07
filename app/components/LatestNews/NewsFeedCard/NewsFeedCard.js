/**
 * Import Libraries
 */

import React from "react";
import PropTypes from "prop-types";
import { Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo";
import Moment from "react-moment";

// Styling
import styles from "./styles";

/**
 * LatestNewsCard
 *
 * Functional Stateless Component
 */
const NewsFeedCard = props => {
  console.log(props.image);

  return (
    <ImageBackground
      style={styles.card__image}
      overlayStyle={styles.card__image__background}
      source={{ uri: `${props.image}` }}>
      <LinearGradient
        colors={[`transparent`, `rgba(0,0,0,0.75)`]}
        style={styles.card__gradient}
      />
      <View style={styles.card__content__wrapper}>
        <Text numberOfLines={3} style={styles.card__content__title}>
          {props.title}
        </Text>
        <View style={styles.card__content__metadata}>
          <Text style={styles.card__content__metadata__newspaper}>{props.author}</Text>
          <Text style={styles.card__content__metadata__timestamp}>
            <Moment element={Text} fromNow ago>
              {props.published}
            </Moment>
            {` `}
            ago
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

NewsFeedCard.defaultProps = {
  title: `Article Title`,
  author: `Article Author`
};

NewsFeedCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  published: PropTypes.string
};

export default NewsFeedCard;
