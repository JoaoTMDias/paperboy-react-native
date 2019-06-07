import { Platform, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const SCREEN_WIDTH = Dimensions.get(`window`).width;

const styles = EStyleSheet.create({
  container: {
    position: `absolute`,
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 16,
    backgroundColor: `rgba(255,255,255,0.64)`,
    flexDirection: `row`,

    height: 80
  },
  blurView: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`
  },
  button: {
    backgroundColor: `$brandColor`,
    width: SCREEN_WIDTH - 32,
    height: 48,
    borderColor: `transparent`,
    borderWidth: 0,
    borderRadius: `$defaultButtonBorderRadius`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`
  },
  buttonTitle: {
    color: `$white`,
    fontFamily: `$headingFontFamilyRegular`,
    fontSize: 16,
    textAlign: `center`,
    letterSpacing: 0.39 - 1
  }
});

export default styles;
