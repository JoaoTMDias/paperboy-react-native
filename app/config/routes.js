// Libraries
import React from "react";
import PropTypes from "prop-types";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import { Platform } from "react-native";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

// Components
import CustomIcon from "../components/general/icons/CustomIcon";

// Screens
import {
  WelcomeScreen,
  NewsSources,
  PreloaderScreen,
  NewsScreen,
  ArticleDetailsScreen,
  SavedScreen,
  SearchScreen,
  CategoriesScreen,
  SettingsScreen
} from "../screens/index";

// 1. The Onboarding Navigation
export const OnboardingNavigator = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null
    }
  },

  NewsSources: {
    screen: NewsSources,
    navigationOptions: {
      header: null
    }
  },

  PreloaderScreen: {
    screen: PreloaderScreen,
    navigationOptions: {
      header: null
    }
  }
});

// 2. News Stack Navigator
export const NewsViewController = createStackNavigator(
  {
    NewsScreen: {
      screen: NewsScreen,
      navigationOptions: {
        header: null
      }
    },

    ArticleDetailsScreen: {
      screen: ArticleDetailsScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.title}`,

        tabBarVisible: false,

        headerStyle: {
          backgroundColor: `rgba(255,255,255,0.92)`
        },

        headerTitleStyle: {
          fontSize: 14,
          fontFamily: `paperboy-heading-regular`
        },

        headerTintColor: `#292929`
      })
    }
  },
  {}
);

// 3. Main App Tab
export const MainAppNavigator = createMaterialBottomTabNavigator(
  {
    News: {
      screen: NewsViewController,
      navigationOptions: {
        title: `News`,
        tabBarIcon: ({ tintColor, focused }) => (
          <CustomIcon
            name={focused ? `ic-news-active` : `ic-news-default`}
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    },

    Saved: {
      screen: SavedScreen,
      navigationOptions: {
        title: `Saved`,
        tabBarIcon: ({ tintColor, focused }) => (
          <CustomIcon
            name={focused ? `ic-saved-active` : `ic-saved-default`}
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    },

    Search: {
      screen: SearchScreen,
      navigationOptions: {
        title: `Search`,
        tabBarIcon: ({ tintColor, focused }) => (
          <CustomIcon
            name={focused ? `ic-search-active` : `ic-search-default`}
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    },

    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: `Categories`,
        tabBarIcon: ({ tintColor, focused }) => (
          <CustomIcon
            name={focused ? `ic-categories-active` : `ic-categories-default`}
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    },

    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: `Settings`,
        tabBarIcon: ({ tintColor, focused }) => (
          <CustomIcon
            name={focused ? `ic-settings-active` : `ic-settings-default`}
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    initialRouteName: `News`,
    activeTintColor: `rgba(255,255,255,1)`,
    inactiveTintColor: `rgba(255,255,255,0.64)`,
    barStyle: {
      backgroundColor: `rgba(41, 41, 41, 0.95)`
    },
    labelStyle: {
      fontSize: 10,
      color: `white`
    },
    shifting: Platform.OS === `android`,
    tabBarOptions: {
      labelStyle: {
        fontSize: 10,
        color: `white`
      },
      style: {
        backgroundColor: `rgba(41, 41, 41, 0.95)`
      }
    }
  }
);

export const createRootNavigator = (signedIn = false) =>
  createSwitchNavigator(
    {
      MainAppNavigator: {
        screen: MainAppNavigator
      },

      OnboardingNavigator: {
        screen: OnboardingNavigator
      }
    },
    {
      initialRouteName: signedIn ? `MainAppNavigator` : `OnboardingNavigator`
    }
  );

NewsViewController.propTypes = {
  focused: PropTypes.bool,
  tintColor: PropTypes.string
};
MainAppNavigator.propTypes = {
  focused: PropTypes.bool,
  tintColor: PropTypes.string
};

export default MainAppNavigator;
