import { Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const STATUSBAR_HEIGHT = Platform.OS === `ios` ? 20 : 0;
const APPBAR_HEIGHT = Platform.OS === `ios` ? 44 : 56;

const styles = EStyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: `$brandColor`,
  },

  appBar: {
    backgroundColor: `$brandColor`,
    height: APPBAR_HEIGHT,
  },
});


export default styles;

