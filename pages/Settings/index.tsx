import React from 'react';
import {
  View,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import TabBar from '../../components/TabBar';
import ContextView from '../../components/ContextView';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

function Settings({navigation}: NativeStackScreenProps<any>): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{height: '100%'}}>
        <TabBar
          title={'设置'}
          leftButtonShow={true}
          navigation={navigation}
          showHome={true}
        />
        <ContextView>
          <Text>settings</Text>
        </ContextView>
      </View>
    </SafeAreaView>
  );
}

export default Settings;
