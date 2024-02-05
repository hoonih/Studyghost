import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styled from "styled-components/native"; ;
import RootNavigator from './src/navigation/RootNavigator';
import BottomNavigation from './src/navigation/BottomNavigation';
import { Main } from "./src/screens/Main"

const App = () => {
  return <BottomNavigation />;
}

export default App;
