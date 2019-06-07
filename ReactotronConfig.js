import Reactotron from "reactotron-react-native";

Reactotron.configure({ name: `Paperboy` })
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
