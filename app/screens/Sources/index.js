import React, { Component } from "react";
import { View, ScrollView, Text, StatusBar, Animated, Platform } from "react-native";
import * as Animatable from "react-native-animatable";
import { connect } from "react-redux";
import { Constants } from "expo";

// Components
import SelectedArray from "../../utilities/selected-array";
import ViewContainer from "../../components/ViewContainer";
import SourcesButtonBar from "../../components/NewsSources/ButtonBar";
import {
  ItemCheckboxTest,
  NewsSourcesGridList,
  NewsSourcesFeatured
} from "../../components/NewsSources/SourcesList";

// Redux
import { SetChosenNewsSources } from "../../redux/actions/preferences-actions";

// Styling
import { HeaderLeft, styles } from "./styles";

/**
 * The Choose Sources Screen
 *
 * @class NewsSources
 * @extends {Component}
 */
class NewsSources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    };
    this.setChosenNewsSources = this.setChosenNewsSources.bind(this);
    this.selectedArrayRef = new SelectedArray();
  }

  componentWillMount() {
    // Set the Status Bar for iPhone X and other versions
    if (Platform.OS == `android`) {
      this.appSpacerHeader = 0;
    } else {
      this.appSpacerHeader = Constants.statusBarHeight;
    }
  }

  setChosenNewsSources() {
    if (this.selectedArrayRef.getArray().length == 0) {
      console.log(`No Item(s) Selected!`);
    } else {
      const chosenItems = this.selectedArrayRef.getArray();
      this.props.dispatch(SetChosenNewsSources(chosenItems));

      // onSignIn().then(() => this.props.navigation.navigate(`PreloaderScreen`));
      this.props.navigation.navigate(`PreloaderScreen`);
    }
  }

  renderSourcesList(sources) {
    return (
      <Animated.ScrollView
        scrollEventThrottle={8}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
        ])}
        contentContainerStyle={{ marginTop: 118 + this.appSpacerHeader }}
        style={{ flex: 1 }}>
        <NewsSourcesFeatured />
        <NewsSourcesGridList
          data={sources.general}
          title="General"
          selectedArrayObject={this.selectedArrayRef}
        />
        <NewsSourcesGridList
          data={sources.sports}
          title="Sports"
          selectedArrayObject={this.selectedArrayRef}
        />
        <NewsSourcesGridList
          data={sources.technology}
          title="Technology"
          selectedArrayObject={this.selectedArrayRef}
        />
        <NewsSourcesGridList
          data={sources.entertainment}
          title="Entertainment"
        />
        <NewsSourcesGridList data={sources.science} title="Science" />
        <NewsSourcesGridList data={sources.business} title="Business" />
        <NewsSourcesGridList data={sources.health} title="Health" />
      </Animated.ScrollView>
    );
  }

  render() {
    const translateY = this.state.scrollY.interpolate({
      inputRange: [0, 58],
      outputRange: [0, -58],
      extrapolate: `clamp`
    });

    const scale = this.state.scrollY.interpolate({
      inputRange: [0, 58],
      outputRange: [1, 0.8],
      extrapolate: `clamp`
    });

    const fade = this.state.scrollY.interpolate({
      inputRange: [0, 0, 58],
      outputRange: [1, 1, 0],
      extrapolate: `clamp`
    });

    const textTranslateY = this.state.scrollY.interpolate({
      inputRange: [0, 58],
      outputRange: [0, 16],
      extrapolate: `clamp`
    });

    return (
      <ViewContainer>
        {this.renderSourcesList(this.props.sources)}
        <SourcesButtonBar title="Let's Go!" onPress={this.setChosenNewsSources} />
        <Animated.View
          style={[
            styles.header,
            {
              paddingTop: this.appSpacerHeader,
              height: 118 + this.appSpacerHeader,
              transform: [{ translateY }]
            }
          ]}>
          <View style={styles.headerLeft}>
            <Animated.Text style={[styles.title, { opacity: fade }]}>
              What do you fancy reading?
            </Animated.Text>
            <Animated.Text
              style={[styles.subtitle, { transform: [{ translateY: textTranslateY }] }]}>
              Choose at least 3 different sources.
            </Animated.Text>
          </View>
        </Animated.View>
        <StatusBar backgroundColor="black" barStyle="dark-content" />
      </ViewContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    sources: state.news.sources
  };
}

export default connect(mapStateToProps)(NewsSources);
