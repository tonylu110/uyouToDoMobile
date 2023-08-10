/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {DefaultTheme, PaperProvider} from 'react-native-paper';
import colors from './colors';

const theme = {
  ...DefaultTheme,
  colors: colors.light, // Copy it from the color codes scheme and then use it here
};

function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
