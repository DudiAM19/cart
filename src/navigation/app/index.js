import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../../screen/cart';

const AppStack = createNativeStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator >
      <AppStack.Screen component={Cart} name="cart" />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;