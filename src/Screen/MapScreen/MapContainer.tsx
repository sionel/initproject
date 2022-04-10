import {View, Text} from 'react-native';
import React from 'react';
import MapPresenter from './MapPresenter';
import {Container} from './types';

const MapContainer: React.FC<Container> = () => {
  return <MapPresenter />;
};

export default MapContainer;
