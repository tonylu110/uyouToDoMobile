import React from 'react';
import {View, ScrollView, useColorScheme, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import style from './style';
import TabBar from '../../components/TabBar';
import ToDoList from '../../components/ToDoList';
import {GearSix} from 'phosphor-react-native';
import getNavigationBarHeight from '../../utils/getNavigationBarHeight';

function Home(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={style.Background}>
      <View style={{height: StatusBar.currentHeight}} />
      <TabBar
        title={'所有 ToDo'}
        leftButtonShow={true}
        rightButtonShow={true}
        leftIcon={<GearSix weight={'fill'} color={'#555'} />}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <ToDoList />
        <View style={{height: getNavigationBarHeight}} />
      </ScrollView>
    </View>
  );
}

export default Home;
