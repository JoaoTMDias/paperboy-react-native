import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const SCREEN_WIDTH = Dimensions.get(`window`).width;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: `$white`,
    flex: 1,
  },
  content: {
    marginTop: 40,
    paddingHorizontal: 24,
    flexDirection: `column`,
    justifyContent: `space-between`
  },

  image: {
    width: SCREEN_WIDTH - 24,
    height: `auto`
  },

  subtitle: {
    fontFamily: `$headingFontFamilyBold`,
    fontSize: 16,
    color: `$brandColor`,
    letterSpacing: 0.24 - 1,
    lineHeight: 20,
    marginBottom: 8
  },

  slogan: {
    fontFamily: `$headingFontFamilyBold`,
    fontSize: 40,
    color: `$black`,
    letterSpacing: 0,
    lineHeight: 45
  },

  body: {
    marginTop: 28,
    fontFamily: `$headingFontFamilyRegular`,
    fontSize: 20,
    color: `$gray5`,
    letterSpacing: 0.48 - 1,
    lineHeight: 28
  }
});

export default styles;
