// Libraries
import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

// Utilities
import cacheAssetsAsync from "./utilities/cacheAssetsAsync";

// Components
// import { AlertProvider } from "./components/Alert";

// Navigation
import RootViewController from "./config";

// Redux
import configureStore from "./redux/store/configureStore";

// Paperboy theme
EStyleSheet.build({
  $headingFontFamilyRegular: `paperboy-heading-regular`,
  $headingFontFamilyBold: `paperboy-heading-bold`,
  $tabBarFontFamily: `paperboy-icon-font`,
  $brandColor: `#E74C3C`,
  $defaultBorderRadius: 8,
  $defaultButtonBorderRadius: 4,
  $defaultViewBackground: `rgba(255,255,255,0.95)`,
  $appBarBackground: `rgba(255,255,255,0.92)`,
  $tabBarInactiveTextColor: `rgba(91,91,91,0.64)`,

  $gray0: `#faf9f8`,
  $gray1: `#f0ecec`,
  $gray2: `#e5dfde`,
  $gray3: `#dad0d0`,
  $gray4: `#cdc0bf`,
  $gray5: `#bfafad`,
  $gray6: `#af9b99`,
  $gray7: `#9b8381`,
  $gray8: `#7a6766`,
  $gray9: `#473c3b`,
  $black: `#473c3b`,
  $primaryOrange: `#d57a66`,
  $primaryGreen: `#00bd9d`,
  $primaryPurple: `#9e768f`,
  $white: `white`,
  $border: `#e2e2e2`,
  $inputText: `#797979`,
  $lightGray: `#f0ecec`
});

// Redux Store
const store = configureStore();

// Fonts
const paperboyHeadingBold = require(`./assets/fonts/paperboy-headings/paperboy-headings-bold.ttf`);
const paperboyHeadingRegular = require(`./assets/fonts/paperboy-headings/paperboy-headings-regular.ttf`);
const paperboyIcons = require(`./assets/fonts/paperboy-icons/paperboy-icons.ttf`);

/**
 * Main App Component
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeIsReady: false,
      appIsReady: false
    };
  }

  // When the component mounts, checks if there is data in the store.
  // When it is done, changes the storeIsReady state.
  // Then it loads all the assets needed for the UI
  async componentDidMount() {
    persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: [`news`, `preferences`]
      },
      () => {
        this.setState({
          storeIsReady: true
        });
      }
    );
    this.initializeAsync();
  }

  // Loads the needed assets in the UI of the app.
  // When it is done, changes the state to true.
  async initializeAsync() {
    try {
      await Promise.all([
        cacheAssetsAsync({
          fonts: [
            {
              "paperboy-heading-bold": paperboyHeadingBold
            },
            {
              "paperboy-heading-regular": paperboyHeadingRegular
            },
            {
              "paperboy-icons": paperboyIcons
            }
          ]
        })
      ]);
    } catch (e) {
      console.log(`error loading assets`);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  // Since checking the store and loading the assets are both Promises, whenever
  // both are done and their state is true, the render method will display the
  // Components. Else it will display a spinner.
  renderApp() {
    if (this.state.appIsReady && this.state.storeIsReady) {
      return (
          <RootViewController />
      );
    }
    return <AppLoading />;
  }

  // The render method
  render() {
    return <Provider store={store}>{this.renderApp()}</Provider>;
  }
}

export default App;
