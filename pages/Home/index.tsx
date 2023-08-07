import React from 'react';
import {View, ScrollView, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import style from './style';
import TabBar from '../../components/TabBar';

function Home(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={style.Background}>
      <TabBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <Text>hello uyou ToDo!</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
