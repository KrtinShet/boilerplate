import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from './HomeNavigation';
import AuthNavigation from './AuthNavigation';

const index = () => {
  const {token} = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      {token ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default index;
