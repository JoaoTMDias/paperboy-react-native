import EStyleSheet from "react-native-extended-stylesheet";

const CARD_HEIGHT = 145;
const CARD_META_HEIGHT = 40;
const CARD_IMAGE_HEIGHT = CARD_HEIGHT - CARD_META_HEIGHT;

const styles = EStyleSheet.create({
  touchable: {
    width: `100%`,
    flex: 1,
    height: CARD_HEIGHT,
    marginHorizontal: 4,
    borderTopLeftRadius: `$defaultBorderRadius`,
    borderTopRightRadius: `$defaultBorderRadius`,
    borderBottomLeftRadius: `$defaultBorderRadius`,
    borderBottomRightRadius: `$defaultBorderRadius`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    marginBottom: 8,
    shadowOpacity: 0.24,
    shadowRadius: 1,
    shadowColor: `rgba(0,0,0,0.12)`,
    shadowOffset: { height: 1, width: 0 }
  },

  container: {
    width: `100%`,
    flex: 1,
    height: CARD_HEIGHT,
    marginHorizontal: 4,
    borderTopLeftRadius: `$defaultBorderRadius`,
    borderTopRightRadius: `$defaultBorderRadius`,
    borderBottomLeftRadius: `$defaultBorderRadius`,
    borderBottomRightRadius: `$defaultBorderRadius`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    marginBottom: 8,
    shadowOpacity: 0.24,
    shadowRadius: 1,
    shadowColor: `rgba(0,0,0,0.12)`,
    shadowOffset: { height: 1, width: 0 }
  },

  checkbox: {
    position: `absolute`,
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 24
  },

  imageContainer: {
    width: CARD_IMAGE_HEIGHT,
    height: CARD_IMAGE_HEIGHT,
    flex: 1,
    backgroundColor: `$lightGray`,
    borderTopLeftRadius: `$defaultBorderRadius`,
    borderTopRightRadius: `$defaultBorderRadius`,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: `hidden`
  },

  image: {
    flex: 1
  },

  meta: {
    width: `100%`,
    height: CARD_META_HEIGHT,
    alignItems: `center`,
    justifyContent: `center`,
    flexDirection: `row`,
    backgroundColor: `rgba(255,255,255,0.50)`,
    borderBottomLeftRadius: `$defaultBorderRadius`,
    borderBottomRightRadius: `$defaultBorderRadius`
  },

  metaActive: {
    width: `100%`,
    height: CARD_META_HEIGHT,
    alignItems: `center`,
    justifyContent: `center`,
    flexDirection: `row`,
    backgroundColor: `rgba(0, 122, 255,1)`,
    borderBottomLeftRadius: `$defaultBorderRadius`,
    borderBottomRightRadius: `$defaultBorderRadius`
  },

  title: {
    width: `100%`,
    paddingHorizontal: 4,
    fontFamily: `$headingFontFamilyRegular`,
    fontSize: 11,
    color: `$gray9`,
    textAlign: `center`
  },

  titleActive: {
    width: `100%`,
    paddingHorizontal: 4,
    fontFamily: `$headingFontFamilyBold`,
    fontSize: 11,
    color: `$white`,
    textAlign: `center`
  }
});

export default styles;
