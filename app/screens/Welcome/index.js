// Libraries
import React, { PureComponent } from "react";
import { View, ScrollView } from "react-native";
import { Container, Spinner } from "native-base";
import * as Animatable from "react-native-animatable";
import { connect } from "react-redux";

// Components
import SourcesButtonBar from "../../components/NewsSources/ButtonBar";
import IconBrandingQuotesLarge from "../../components/general/icons/ic_branding_quotes_large";

// Redux
import { getAllAvailableNewsSources } from "../../redux/actions/news-actions";

// styles
import styles from "./styles";

/**
 * WelcomeScreen
 *
 * Functional Stateless Component
 */
class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  componentDidMount() {
    this.getNewsSources();
  }

  getNewsSources() {
    this.props.dispatch(getAllAvailableNewsSources());
  }

  handleButtonPress() {
    this.props.navigation.navigate(`NewsSources`);
  }

  renderCallToAction() {
    const data = this.props.sources;

    const displayCallToAction = data ? (
      <SourcesButtonBar title="Pick news sources" onPress={this.handleButtonPress} />
    ) : (
      <Spinner color="#e5dfde" />
    );

    return (
      <View
        animation="fadeInUp"
        duration={1000}
        delay={1500}
        easing="ease-out-back"
        style={{
          position: `absolute`,
          left: 0,
          right: 0,
          bottom: 0,
        }} 
      >
        {displayCallToAction}
      </View>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <Animatable.View
          animation="fadeInDown"
          duration={4000}
          easing="ease-out-quint"
          useNativeDriver
          style={styles.image}
        >
          <IconBrandingQuotesLarge />
        </Animatable.View>
        <View style={styles.content}>
          <Animatable.Text animation="fadeInRight" easing="ease-out-quint" delay={500} style={styles.subtitle}>
            Welcome!
          </Animatable.Text>
          <Animatable.Text animation="fadeInRight" easing="ease-out-quint" delay={750} style={styles.slogan}>
            Your News,
          </Animatable.Text>
          <Animatable.Text animation="fadeInRight" easing="ease-out-quint" delay={875} style={styles.slogan}>
            Your Control.
          </Animatable.Text>
          <Animatable.Text animation="fadeInRight" easing="ease-out-quint" delay={1000} style={styles.body}>
            This is Paperboy, bringing you the most important news of the hour, right from your favorite sources.
          </Animatable.Text>
        </View>
        {this.renderCallToAction()}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    sources: state.news.sources
  };
}

export default connect(mapStateToProps)(WelcomeScreen);
