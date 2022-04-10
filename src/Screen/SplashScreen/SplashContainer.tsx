import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashPresenter from './SplashPresenter';
import {Container} from './types';

const SplashContainer: React.FC<Container> = ({}) => {
  const [test, setTest] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      
    }, 3000);
    return () => {};
  }, []);

  return <SplashPresenter />;
};

export default SplashContainer;
