import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  newsTabHeader: {
    height: 0,
    backgroundColor: `$white`,
  },

  newsTab: {
    backgroundColor: `$white`
  },

  newsTabTextStyle: {
    fontFamily: `$headingFontFamilyRegular`,
    fontSize: 14,
    color: `$gray7`
  },

  newsTabActiveTextStyle: {
    fontFamily: `$headingFontFamilyBold`,
    fontSize: 14,
    color: `$brandColor`
  },
  underlineStyle: {
    position: `absolute`,
    height: 2,
    backgroundColor: `$brandColor`
  }
});

export default styles;