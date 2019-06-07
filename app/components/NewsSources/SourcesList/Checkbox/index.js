import React, { Component } from "react";
import { View, TouchableHighlight, Text, StyleSheet, Image, Platform } from "react-native";

import PropTypes from "prop-types";

import SelectedArray from "../../../../utilities/selected-array";
import Checkbox from "./checkbox";

class ItemCheckboxTest extends Component {
  constructor() {
    super();
    this.selectedArrayRef = new SelectedArray();
  }

  getSelectedItems = () => {
    if (this.selectedArrayRef.getArray().length == 0) {
      console.log("No Item(s) Selected!");
    } else {
      const chosenItems = this.selectedArrayRef.getArray();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Checkbox
          size={30}
          keyValue={1}
          selectedArrayObject={this.selectedArrayRef}
          checked={true}
          color="#636c72"
          label="Item #1"
        />
        <Checkbox
          size={35}
          keyValue={2}
          selectedArrayObject={this.selectedArrayRef}
          checked={true}
          color="#0275d8"
          label="Item #2"
        />
        <Checkbox
          size={40}
          keyValue={3}
          selectedArrayObject={this.selectedArrayRef}
          checked={true}
          color="#5cb85c"
          label="Item #3"
        />
        <Checkbox
          size={45}
          keyValue={4}
          selectedArrayObject={this.selectedArrayRef}
          checked={true}
          color="#f0ad4e"
          label="Item #4"
        />
        <Checkbox
          size={50}
          keyValue={5}
          selectedArrayObject={this.selectedArrayRef}
          checked={true}
          color="#d9534f"
          label="Item #5"
        />

        <TouchableHighlight
          underlayColor="rgba(0,0,0,0.6)"
          style={styles.selectedArrayItemsBtn}
          onPress={this.getSelectedItems}
        >
          <Text style={styles.btnText}>Get Selected</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    paddingHorizontal: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  selectedArrayItemsBtn: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
    alignSelf: "stretch"
  },

  btnText: {
    color: "white",
    textAlign: "center",
    alignSelf: "stretch",
    fontSize: 18
  },

  checkBoxButton: {
    marginVertical: 10
  },

  checkBoxHolder: {
    flexDirection: "row",
    alignItems: "center"
  },

  checkedView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  checkedImage: {
    height: "80%",
    width: "80%",
    tintColor: "white",
    resizeMode: "contain"
  },

  uncheckedView: {
    flex: 1,
    backgroundColor: "white"
  },

  checkBoxLabel: {
    fontSize: 17,
    paddingLeft: 10
  }
});

Checkbox.propTypes = {
  size: PropTypes.number,
  keyValue: PropTypes.number.isRequired,
  selectedArrayObject: PropTypes.object.isRequired,
  color: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool
};

Checkbox.defaultProps = {
  size: 30,
  color: "#636c72",
  label: "Default",
  checked: false
};

export default ItemCheckboxTest;
