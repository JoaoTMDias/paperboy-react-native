import { AsyncStorage } from "react-native";

export const USER_KEY = `paperboy-user-key`;

export const onSignIn = () => AsyncStorage.setItem(USER_KEY, `true`);

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () =>
  new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(result => {
        if (result !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(error => reject(error));
  });
