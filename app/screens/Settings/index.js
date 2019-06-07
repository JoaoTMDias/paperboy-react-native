import {
  Body,
  Container,
  Content,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Switch,
  Text,
  Title,
  Button
} from "native-base";
import React, { PureComponent } from "react";

// Redux
import { connect } from "react-redux";
import { resetAppState } from "../../redux/actions/general-actions";

// styles
import styles from "./styles";

class SettingsScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClickOnSignOut = this.handleClickOnSignOut.bind(this);
  }

  componentDidMount() {}

  handleClickOnSignOut() {
    this.props.dispatch(resetAppState(this.props.navigation));
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left />
          <Body>
            <Title style={styles.headerTitle}>Settings</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Airplane Mode</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
                <Text>Wi-Fi</Text>
              </Body>
              <Right>
                <Text>GeekyAnts</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Button onPress={this.handleClickOnSignOut}>
                <Text>Logout</Text>
              </Button>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { preferences: state.preferences };
}

export default connect(mapStateToProps)(SettingsScreen);
