import React, {useState} from 'react';
import {
  View,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  NativeModules,
} from 'react-native';
import TabBar from '../../components/TabBar';
import ContextView from '../../components/ContextView';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import style from './style';

function Settings({navigation}: NativeStackScreenProps<any>): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [appVersion, setAppVersion] = useState('');

  NativeModules.RNToolsManager.getAppVersion((event: string) => {
    setAppVersion(event);
  });

  NativeModules.RNToolsManager.getVersionCode((event: number) => {
    console.log(event);
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={style.background}>
        <TabBar title={'设置'} leftButtonShow={true} navigation={navigation} />
        <ContextView>
          <View style={style.list}>
            <View
              style={[
                style.logo,
                {backgroundColor: isDarkMode ? '#444444' : '#ffffff'},
              ]}>
              <Image
                style={style.logoImg}
                source={require('../../assets/images/logo.png')}
              />
              <Text
                style={[style.logoText, {color: isDarkMode ? '#aaa' : '#555'}]}>
                uyou ToDo {appVersion}
              </Text>
            </View>
          </View>
        </ContextView>
      </View>
    </SafeAreaView>
  );
}

export default Settings;
