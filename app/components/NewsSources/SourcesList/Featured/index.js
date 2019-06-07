import React, { PureComponent } from "react";
import { View, Text, ScrollView } from "react-native";
import styled from "styled-components";

// Components
import NewsSourcesFeaturedItem from "./Item";

// Data
import FeaturedNewsSources from "../../../../data/FeaturedNewsSources";

// Styling
import styles from "./styles";

const Featured = FeaturedNewsSources;

/**
 * NewsSourcesFeatured
 *
 * Functional Stateless Component
 */
class NewsSourcesFeatured extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sources: []
    };
  }

  componentDidMount() {
    this.setState({
      sources: Featured
    });
  }

  renderHeader = headerItem => {
    return <Text style={styles.sectionHeader}>Editor's Suggestions</Text>;
  };

  renderSourcesItem() {
    const sources = this.state.sources;
    const items = sources.map(item => (
      <NewsSourcesFeaturedItem id={item.id} key={item.id} uri={item.url} title={item.name} category={item.category} />
    ));

    return (
      <ScrollView style={styles.sourcesList} horizontal pagingEnabled>
        {items}
      </ScrollView>
    );
  }

  render() {
    return (
      <Wrapper>
        {this.renderHeader()}
        <View style={{ flex: 1 }}>{this.renderSourcesItem()}</View>
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export default NewsSourcesFeatured;
