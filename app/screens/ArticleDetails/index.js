import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, WebView } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

/**
 * Article Details View
 *
 * Functional Stateless Component
 */
class ArticleDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: this.props.navigation.state.params.url,
      visible: true
    };
  }

  showSpinner() {
    this.setState({ visible: true });
  }

  hideSpinner() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Spinner
          visible={this.state.visible}
          overlayColor="rgba(0,0,0,0.5)"
          animation="fade"
          textStyle={{ color: `#FFF` }}
        />
        <WebView
          scalesPageToFit
          source={{
            uri: this.state.uri
          }}
          onLoadStart={() => this.showSpinner()}
          onLoad={() => this.hideSpinner()}
        />
      </View>
    );
  }
}

ArticleDetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.object.isRequired
  }).isRequired
};

export default ArticleDetailsScreen;
