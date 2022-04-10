import {View, Text} from 'react-native';
import React from 'react';
import LoginPresenter from './LoginPresenter';
import {Container} from './types';

const LoginContainer: React.FC<Container> = () => {
  return <LoginPresenter />;
};

export default LoginContainer;
