// Libraries
import EStyleSheet from "react-native-extended-stylesheet";


// Styles
const styles = EStyleSheet.create({
  container: {
    flexDirection: `column`,
    justifyContent: `center`,
    flexWrap: `wrap`,

    "@media (min-width: 640)": {
      flexDirection: `row`,
    }
  },

  scrollview: {
    flexWrap: `wrap`
  },

  // devices on Landscape

  list: {
    width: `100%`,
    justifyContent: `flex-start`,
    flexDirection: `row`,
    flexWrap: `wrap`,
    flex: 1,
    backgroundColor: `rgba(41, 41, 41, 0.95)`
  },

  card__anchor: {
    flexBasis: `100%`,

    "@media (min-width: 640)": {
      maxHeight: 300,
      flexBasis: `${100 / 2}%`
    },

    "@media (min-width: 769)": {
      maxHeight: 300,
      flexBasis: `${100 / 3}%`
    }
  },

  card__item: {
    margin: 0
  }
});

export default styles;
