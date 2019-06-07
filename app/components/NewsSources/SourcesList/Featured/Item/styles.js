import EStyleSheet from "react-native-extended-stylesheet";

const CARD_HEIGHT = 172;
const CARD_META_HEIGHT = 44;
const CARD_IMAGE_HEIGHT = CARD_HEIGHT - CARD_META_HEIGHT;

const styles = EStyleSheet.create({
  container: {
    width: CARD_IMAGE_HEIGHT,
    marginRight: 16,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`
  },

  image: {
    width: CARD_IMAGE_HEIGHT,
    height: CARD_IMAGE_HEIGHT,
    backgroundColor: `$lightGray`,
    marginBottom: 8,
    borderRadius: `$defaultBorderRadius`
  },

  meta: {
    width: `100%`,
    height: CARD_META_HEIGHT,
    alignItems: `flex-start`,
    justifyContent: `center`,
    flexDirection: `column`
  },

  title: {
    fontFamily: `$headingFontFamilyRegular`,
    fontSize: 14,
    color: `$gray9`,
    textAlign: `left`,
    marginBottom: 2
  },

  category: {
    fontFamily: `$headingFontFamilyRegular`,
    fontSize: 12,
    color: `$gray7`,
    textAlign: `left`
  }
});

export default styles;
