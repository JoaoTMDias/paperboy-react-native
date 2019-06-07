import React, { Component } from "react";
import { createRootNavigator } from "./routes";
import { isSignedIn } from "./auth";

class RootViewController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(result => this.setState({ signedIn: result, checkedSignIn: true }))
      .catch(error => console.log(`An error occurred`));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}

export default RootViewController;
