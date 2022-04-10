import {View, Text} from 'react-native';
import React from 'react';
import FriendPresenter from './FriendPresenter';
import {Container} from './types';

const FriendContainer: React.FC<Container> = () => {
  return <FriendPresenter />;
};

export default FriendContainer;
