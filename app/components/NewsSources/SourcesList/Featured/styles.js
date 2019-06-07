import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const SCREEN_HEIGHT = Dimensions.get(`window`).height;
const SCREEN_WIDTH = Dimensions.get(`window`).width;

const styles = EStyleSheet.create({
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
