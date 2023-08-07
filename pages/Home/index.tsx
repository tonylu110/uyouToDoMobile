import React from 'react';
import {View, useColorScheme} from 'react-native';
import style from './style';
import TabBar from '../../components/TabBar';
import ToDoList from '../../components/ToDoList';
import {GearSix} from 'phosphor-react-native';
import ContextView from '../../components/ContextView';

function Home(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={style.Background}>
      <TabBar
        title={'所有 ToDo'}
        leftButtonShow={true}
        rightButtonShow={true}
        leftIcon={
          <GearSix weight={'fill'} color={isDarkMode ? '#aaa' : '#555'} />
        }
      />
      <ContextView>
        <ToDoList />
      </ContextView>
    </View>
  );
}

export default Home;
