import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #f96;
`;

const Logo = styled.Image`
  height: 30%;
  marginBottom: 40px;
`;

const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  backgroundColor: #FFF;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

const ErrorMessage = styled.Text`
  textAlign: center;
  color: #ce2029;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Button = styled.TouchableHighlight`
  padding: 20px;
  borderRadius: 5px;
  backgroundColor: #FFF;
  alignSelf: stretch;
  margin: 20px;
  marginHorizontal: 22px;
`;

const ButtonText = styled.Text`
  color: #f96;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
  marginTop: 20px;
`;

const SignUpLinkText = styled.Text`
  color: #FFF;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

export { Container, Logo, Input, ErrorMessage, Button, ButtonText, SignUpLink, SignUpLinkText };