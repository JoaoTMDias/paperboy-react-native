import styled from "styled-components";
import EStyleSheet from "react-native-extended-stylesheet";

export const HeaderLeft = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const HeaderRight = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const styles = EStyleSheet.create({
  header: {
    position: `absolute`,
    top: 0,
    left: 0,
    right: 0,
    width: `100%`,
    paddingHorizontal: 16,
    backgroundColor: `$white`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `space-between`
  },
  headerLeft: {
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `flex-start`
  },
  headerRight: {
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `flex-end`
  },
  title: {
    fontFamily: `$headingFontFamilyRegular`,
    width: `100%`,
    fontSize: 20,
    color: `$gray9`,
    letterSpacing: 0,
    marginBottom: 4
  },
  subtitle: {
    fontFamily: `$headingFontFamilyRegular`,
    fontSize: 14,
    color: `$gray7`,
    letterSpacing: 0
  },
  content: {
    flex: 1
  }
});
