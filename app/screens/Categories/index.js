import { Body, Container, Content, Header, Left, Right, Text, Grid, Col, Title } from "native-base";
import React, { PureComponent } from "react";
import { connect } from "react-redux";

// styles
import styles from "./styles";

class CategoriesScreen extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left />
          <Body>
            <Title style={styles.headerTitle}>Categories</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Grid>
            <Col style={{ backgroundColor: `#635DB7`, height: 200 }}>
              <Text>Text</Text>
            </Col>
            <Col style={{ backgroundColor: `#00CE9F`, height: 200 }} />
          </Grid>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { preferences: state.preferences };
}

export default connect(mapStateToProps)(CategoriesScreen);
