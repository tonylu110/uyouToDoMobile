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
import SettingItem from '../../components/SettingItem';
import SettingBox from '../../components/SettingItem/Box';
import {Switch} from 'react-native-paper';

function Settings({navigation}: NativeStackScreenProps<any>): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [appVersion, setAppVersion] = useState('');

  NativeModules.RNToolsManager.getAppVersion((event: string) => {
    setAppVersion(event);
  });

  // NativeModules.RNToolsManager.getVersionCode((event: number) => {
  //   console.log(event);
  // });

  const [switchState, setSwitchState] = useState(false);

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
            <SettingItem
              title={'我的账号'}
              onItemPress={() => navigation.navigate('Account')}
            />
            <SettingBox.Box>
              <SettingBox.Item
                title={'自动更新'}
                hiddenArrow={true}
                onItemPress={() => setSwitchState(!switchState)}>
                <Switch
                  value={switchState}
                  onChange={() => setSwitchState(!switchState)}
                />
              </SettingBox.Item>
              <SettingBox.Item
                title={'应用更新'}
                borderHidden={true}
                onItemPress={() => navigation.navigate('Update')}
              />
            </SettingBox.Box>
          </View>
        </ContextView>
      </View>
    </SafeAreaView>
  );
}

export default Settings;
