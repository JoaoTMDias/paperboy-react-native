import React, { Component } from "react";
import { TouchableHighlight, View, Image, Text } from "react-native";

import styles from "./styles";

class Checkbox extends Component {
  constructor() {
    super();

    this.state = { checked: null };
  }

  componentDidMount() {
    if (this.props.checked) {
      this.setState({ checked: true }, () => {
        this.props.selectedArrayObject.setItem({
          key: this.props.keyValue,
          label: this.props.label
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
    return (
      <TouchableHighlight
        onPress={this.toggleState.bind(this, this.props.keyValue, this.props.label)}
        underlayColor="transparent"
        style={styles.checkBoxButton}
      >
        <View style={styles.checkBoxHolder}>
          <View
            style={{
              width: this.props.size,
              height: this.props.size,
              backgroundColor: this.props.color,
              padding: 2
            }}
          >
            {this.state.checked ? (
              <View style={styles.checkedView}>
                <Image source={require(`./check.png`)} style={styles.checkedImage} />
              </View>
            ) : (
              <View style={styles.uncheckedView} />
            )}
          </View>
          <Text style={[styles.checkBoxLabel, { color: this.props.color }]}>{this.props.label}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Checkbox;
