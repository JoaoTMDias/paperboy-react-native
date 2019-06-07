import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  checkBoxButton: {
    marginVertical: 10
  },

  checkBoxHolder: {
    flexDirection: `column`,
    alignItems: `center`
  },

  checkedView: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`
  },

  checkedImage: {
    height: `80%`,
    width: `80%`,
    tintColor: `white`,
    resizeMode: `contain`
  },

  uncheckedView: {
    flex: 1,
    backgroundColor: `white`
  },

  checkBoxLabel: {
    fontSize: 17,
    paddingLeft: 10
  }
});

export default styles;
