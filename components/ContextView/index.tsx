import React, {PropsWithChildren} from 'react';
import {ScrollView, useColorScheme, View} from 'react-native';
import getNavigationBarHeight from '../../utils/getNavigationBarHeight';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function ContextView(props: PropsWithChildren): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      {props.children}
      <View style={{height: getNavigationBarHeight}} />
    </ScrollView>
  );
}

export default ContextView;
