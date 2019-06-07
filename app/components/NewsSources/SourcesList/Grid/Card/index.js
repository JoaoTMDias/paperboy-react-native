import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ImageBackground, TouchableOpacity, View, Image, Text } from "react-native";

// Icons
import IconCardCheckbox from "../../../../general/icons/ic_card_checkbox";

// Styles
import styles from "./styles";

/**
 * NewsSourcesCard
 *
 * Functional Stateless Component
 */
class NewsSourcesCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  componentDidMount() {
    if (this.props.checked) {
      this.setState({ checked: true }, () => {
        this.props.selectedArrayObject.setItem({
          key: this.props.keyValue,
          label: this.props.title
        });
      });
    } else {
      this.setState({ checked: false });
    }
  }

  toggleState(key, label) {
    this.setState({ checked: !this.state.checked }, () => {
      if (this.state.checked) {
        this.props.selectedArrayObject.setItem({ key, label });
      } else {
        this.props.selectedArrayObject
          .getArray()
          .splice(this.props.selectedArrayObject.getArray().findIndex(x => x.key == key), 1);
      }
    });
  }

  render() {
    const { uri, title } = this.props;
    const SourceImage = `https://paperboy-icon-service.herokuapp.com/icon?url=${uri}&size=84..105..128`;
    return (
      <TouchableOpacity
        onPress={this.toggleState.bind(this, this.props.keyValue, this.props.title)}
        underlayColor="#E74C3C"
        style={styles.touchable}
      >
        <ImageBackground
          blurRadius={100}
          source={{ uri: SourceImage }}
          imageStyle={{ borderRadius: 8 }}
          style={styles.container}
        >
          <View style={styles.imageContainer}>
            <Image resizeMode="cover" source={{ uri: SourceImage }} style={styles.image} />

            <View style={styles.checkbox}>
              {this.state.checked ? <IconCardCheckbox fill="#007AFF" /> : <IconCardCheckbox />}
            </View>
          </View>
          {this.state.checked ? (
            <View style={styles.metaActive}>
              <Text style={styles.titleActive} numberOfLines={1} ellipsizeMode="tail">
                {title}
              </Text>
            </View>
          ) : (
            <View style={styles.meta}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {title}
              </Text>
            </View>
          )}
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

NewsSourcesCard.defaultProps = {
  title: `===`,
  uri: `https://www.google.com`
};

NewsSourcesCard.propTypes = {
  keyValue: PropTypes.string.isRequired,
  title: PropTypes.string,
  uri: PropTypes.string
};

export default NewsSourcesCard;
