import React from 'react';
import {View, useColorScheme, SafeAreaView, StatusBar} from 'react-native';
import style from './style';
import TabBar from '../../components/TabBar';
import ToDoList from '../../components/ToDoList';
import {GearSix} from 'phosphor-react-native';
import ContextView from '../../components/ContextView';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

function Home({navigation}: NativeStackScreenProps<any>): JSX.Element {
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
      <View style={style.Background}>
        <TabBar
          title={'所有 ToDo'}
          leftButtonShow={true}
          rightButtonShow={true}
          leftIcon={
            <GearSix weight={'fill'} color={isDarkMode ? '#aaa' : '#555'} />
          }
          leftButtonFn={() => navigation.navigate('Settings')}
          navigation={navigation}
        />
        <ContextView>
          <ToDoList />
        </ContextView>
      </View>
    </SafeAreaView>
  );
}

export default Home;
