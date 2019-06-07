import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  card__image: {
    width: `100%`,
    height: `100%`
  },

  card__image__background: {
    alignItems: `center`,
    justifyContent: `center`,
    backgroundColor: `rgba(0,0,0,0.3)`
  },

  card__gradient: {
    position: `absolute`,
    left: 0,
    right: 0,
    bottom: 0,
    height: `75%`,
  },

  card__content__wrapper: {
    flex: 1,
    width: `100%`,
    flexDirection: `column`,
    justifyContent: `flex-end`,
    paddingLeft: 16,
    paddingRight: 20
  },

  card__content__title: {
    fontSize: 21,
    lineHeight: 28,
    textAlign: `left`,
    alignItems: `flex-start`,
    color: `$white`,
    fontFamily: `$headingFontFamilyRegular`
  },

  card__content__metadata: {
    flexDirection: `row`,
    justifyContent: `space-between`,
    marginTop: 18,
    marginBottom: 18
  },

  card__content__metadata__newspaper: {
    textAlign: `left`,
    fontSize: 12,
    color: `$white`, 
    opacity: 1,
    fontFamily: `$headingFontFamilyRegular`
  },

  card__content__metadata__timestamp: {
    textAlign: `right`,
    fontSize: 12,
    color: `$white`,
    opacity: 0.9,
    fontFamily: `$headingFontFamilyRegular`
  }
});

export default styles;
