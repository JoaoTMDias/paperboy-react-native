import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: `$white`
  },

  content: {
    height: `100%`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`
  },

  icon: {
    width: 74,
    height: 88,
    backgroundColor: `$white`,
    marginBottom: 24
  },

  label: {
    fontSize: 16,
    fontFamily: `$headingFontFamilyRegular`,
    color: `$gray6`,
    textAlign: `center`
  }
});

export default styles;
