import React from "react";
import { Container } from "native-base";

/**
 * ViewContainer
 *
 * Functional Stateless Component
 */
const ViewContainer = props => (
  <Container
    style={{
      flex: 1,
      alignItems: `center`,
      justifyContent: `center`,
      backgroundColor: `#faf9f9`
    }}>
    {props.children}
  </Container>
);
export default ViewContainer;
