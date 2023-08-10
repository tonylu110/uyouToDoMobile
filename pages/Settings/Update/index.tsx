import {StatusBar, SafeAreaView, View, useColorScheme} from 'react-native';
import style from '../style';
import TabBar from '../../../components/TabBar';
import React from 'react';
import ContextView from '../../../components/ContextView';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

function Update({navigation}: NativeStackScreenProps<any>): JSX.Element {
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
      <View style={style.background}>
        <TabBar
          title={'应用更新'}
          leftButtonShow={true}
          navigation={navigation}
          showHome={true}
        />
        <ContextView />
      </View>
    </SafeAreaView>
  );
}

export default Update;
