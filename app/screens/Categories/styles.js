import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    backgroundColor: `$gray0`
  },

  header: {
    backgroundColor: `$white`
  },

  headerTitle: {
    fontFamily: `$headingFontFamilyBold`,
    fontSize: 16,
    color: `$black`
  }
});

export default styles;