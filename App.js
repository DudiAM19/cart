import * as React from 'react';
import RootNavigator from './src/navigation';
import {View, LogBox} from 'react-native'
LogBox.ignoreAllLogs()

const App = () => {
  return (
      <RootNavigator />
  );
};

export default App;