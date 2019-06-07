import React, { PureComponent } from "react";
import { View, FlatList, Text, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";

// Components
import SelectedArray from "../../../../utilities/selected-array";
import NewsSourcesCard from "./Card";

// Styling
import styles from "./styles";

const SCREEN_WIDTH = Dimensions.get(`window`).width;

/**
 * NewsSourcesGridList
 *
 * Functional Stateless Component
 */
class NewsSourcesGridList extends PureComponent {
  constructor() {
    super();
    this.selectedArrayRef = new SelectedArray();
  }

  keyExtractor = (item, index) => item.id;

  renderItem = ({ item }) => (
    <NewsSourcesCard
      id={item.id}
      keyValue={item.id}
      uri={item.url}
      title={item.name}
      selectedArrayObject={this.props.selectedArrayObject}
      checked={false}
    />
  );

  render() {
    const { data, title, selectedArrayObject } = this.props;
    let numberOfColumns;

    if (SCREEN_WIDTH >= 320 && SCREEN_WIDTH <= 359) {
      numberOfColumns = 2;
    } else if (SCREEN_WIDTH >= 360 && SCREEN_WIDTH <= 450) {
      numberOfColumns = 3;
    } else if (SCREEN_WIDTH >= 451 && SCREEN_WIDTH <= 768) {
      numberOfColumns = 4;
    } else if (SCREEN_WIDTH >= 769 && SCREEN_WIDTH <= 1024) {
      numberOfColumns = 5;
    } else if (SCREEN_WIDTH >= 1025) {
      numberOfColumns = 8;
    }

    return (
      <Animatable.View
        style={{ flex: 1, flexDirection: "column" }}
        animation="fadeInUp"
        duration={1000}
        delay={500}
        easing="ease-out-expo"
      >
        <Text style={styles.sectionHeader}>
          {title} ({data.length})
        </Text>
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          numColumns={numberOfColumns}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </Animatable.View>
    );
  }
}

export default NewsSourcesGridList;
