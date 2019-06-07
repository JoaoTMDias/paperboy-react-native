import { DangerZone } from "expo";
import { Container } from "native-base";
import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import { connect } from "react-redux";
import { onSignIn } from "../../config/auth";
// Redux
import { getAllLatestNewsFromSource } from "../../redux/actions/news-actions";
import data from "./data.json";
//
// Styles
import styles from "./styles";

const { Lottie } = DangerZone;

/**
 * The Screen before displaying the news and also
 * after choosing the news sources
 *
 * @class PreloaderScreen
 * @extends {React.Component}
 */
class PreloaderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: null,
      isDataLoaded: false,
      speed: 1
    };
  }

  /**
   * Plays the lottie animation
   *
   * @memberof PreloaderScreen
   */
  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimation();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  /**
   * Loads the json file
   *
   * @memberof PreloaderScreen
   */
  _loadAnimation = () => {
    this.setState(
      {
        animation: data
      },
      this._playAnimation
    );
  };

  /**
   * Gets the latest news from the newsapi source
   *
   * @memberof PreloaderScreen
   */
  fetchLatestNews(sources) {
    if (sources) {
      console.log('sources: ', sources);
      let array = sources.items.map(source => source.key);
      let chosen = array.toString();
      this.props.dispatch(getAllLatestNewsFromSource(chosen));
    }
    onSignIn().then(() => this.props.navigation.navigate(`MainAppNavigator`));
  }

  componentDidMount() {
    this._playAnimation();
    setTimeout(() => {
      this.fetchLatestNews(this.props.chosenSources);
    }, 2000);
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.content}>
          {this.state.animation && (
            <Animatable.View
              animation="fadeInDown"
              easing="ease-out-back"
              iterationCount={1}
              style={styles.icon}>
              <Lottie
                ref={animation => {
                  this.animation = animation;
                }}
                source={this.state.animation}
                speed={this.state.speed}
                loop={true}
              />
            </Animatable.View>
          )}
          <Animatable.Text
            animation="fadeInUp"
            easing="ease-out-back"
            delay={1000}
            style={styles.label}>
            Fetching all the latest news...
          </Animatable.Text>
        </View>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    chosenSources: state.preferences.sources,
    latestNews: state.news.latest
  };
}

export default connect(mapStateToProps)(PreloaderScreen);
