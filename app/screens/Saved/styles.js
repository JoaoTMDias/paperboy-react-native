import { Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const STATUSBAR_HEIGHT = Platform.OS === `ios` ? 20 : 0;
const APPBAR_HEIGHT = Platform.OS === `ios` ? 44 : 56;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
  },
  tabbar: {
    backgroundColor: `$appBarBackground`,
    height: APPBAR_HEIGHT,
    flexDirection: `column`,
    justifyContent: `center`,
  },
  individualTab: {
    height: APPBAR_HEIGHT,
    width: 110,
  },
  indicator: {
    backgroundColor: `$brandColor`,
  },
  label: {
    color: `$tabBarInactiveTextColor`,
    fontWeight: `400`,
  },
});

export default styles;
