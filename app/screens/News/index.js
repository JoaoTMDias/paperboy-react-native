// Libraries
import { Constants } from "expo";
import { Container, Header, ScrollableTab, Tab, Tabs } from "native-base";
import React, { Component } from "react";
import { Platform, Text } from "react-native";

// Components
import LatestNews from "../../components/LatestNews";

// Styles
import styles from "./styles";

class NewsScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.newsTabHeader} hasTabs />
        <Tabs
          style={{
            paddingTop: Platform.OS == `ios` ? 0 : Constants.statusBarHeight,
          }}
          tabBarUnderlineStyle={styles.underlineStyle}
          renderTabBar={() => <ScrollableTab style={{backgroundColor: `white`}} />}>
          <Tab
            tabStyle={styles.newsTab}
            activeTabStyle={styles.newsTab}
            textStyle={styles.newsTabTextStyle}
            activeTextStyle={styles.newsTabActiveTextStyle}
            heading="Latest">
            <LatestNews navigation={this.props.navigation} />
          </Tab>
          <Tab
            tabStyle={styles.newsTab}
            activeTabStyle={styles.newsTab}
            textStyle={styles.newsTabTextStyle}
            activeTextStyle={styles.newsTabActiveTextStyle}
            heading="General">
            <Text>General</Text>
          </Tab>
          <Tab
            tabStyle={styles.newsTab}
            activeTabStyle={styles.newsTab}
            textStyle={styles.newsTabTextStyle}
            activeTextStyle={styles.newsTabActiveTextStyle}
            heading="Business">
            <Text>Business</Text>
          </Tab>
          <Tab
            tabStyle={styles.newsTab}
            activeTabStyle={styles.newsTab}
            textStyle={styles.newsTabTextStyle}
            activeTextStyle={styles.newsTabActiveTextStyle}
            heading="Entertainment">
            <Text>Entertainment</Text>
          </Tab>
          <Tab
            tabStyle={styles.newsTab}
            activeTabStyle={styles.newsTab}
            textStyle={styles.newsTabTextStyle}
            activeTextStyle={styles.newsTabActiveTextStyle}
            heading="Health">
            <Text>Health</Text>
          </Tab>
          <Tab
            tabStyle={styles.newsTab}
            activeTabStyle={styles.newsTab}
            textStyle={styles.newsTabTextStyle}
            activeTextStyle={styles.newsTabActiveTextStyle}
            heading="Science">
            <Text>Science</Text>
          </Tab>
          <Tab
            tabStyle={styles.newsTab}
            activeTabStyle={styles.newsTab}
            textStyle={styles.newsTabTextStyle}
            activeTextStyle={styles.newsTabActiveTextStyle}
            heading="Sports">
            <Text>Sports</Text>
          </Tab>
          <Tab
            tabStyle={styles.newsTab}
            activeTabStyle={styles.newsTab}
            textStyle={styles.newsTabTextStyle}
            activeTextStyle={styles.newsTabActiveTextStyle}
            heading="Technology">
            <Text>Technology</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default NewsScreen;
