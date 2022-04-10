import {View, Text} from 'react-native';
import React from 'react';
import SplashPresenter from './SplashPresenter';
import {Container} from './types';

const SplashContainer: React.FC<Container> = () => {
  return <SplashPresenter />;
};

export default SplashContainer;
