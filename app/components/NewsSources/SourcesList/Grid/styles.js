import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const SCREEN_WIDTH = Dimensions.get(`window`).width;

const styles = EStyleSheet.create({
  list: {
    justifyContent: `center`,
    flexDirection: `column`,
    width: SCREEN_WIDTH,
    paddingHorizontal: 16,
    paddingBottom: 24
  },
  sectionHeader: {
    fontFamily: `$headingFontFamilyBold`,
    color: `$gray8`,
    fontSize: 14,
    alignSelf: `flex-start`,
    justifyContent: `center`,
    marginLeft: 16,
    marginBottom: 16
  },
  sourcesList: {
    paddingLeft: 16,
    paddingBottom: 16,
    flex: 1
  }
});

export default styles;
