import React, {useState} from 'react';
import {View, useColorScheme, SafeAreaView, StatusBar} from 'react-native';
import style from './style';
import TabBar from '../../components/TabBar';
import ToDoList from '../../components/ToDoList';
import {GearSix} from 'phosphor-react-native';
import ContextView from '../../components/ContextView';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import setupToDo from '../../utils/setupToDo';
import ToDo from '../../type/ToDo';

function Home({navigation}: NativeStackScreenProps<any>): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [todoList, setTodoList] = useState<ToDo[]>([]);

  setupToDo().then((res: ToDo[]) => {
    setTodoList(res);
  });

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
          <ToDoList list={todoList} />
        </ContextView>
      </View>
    </SafeAreaView>
  );
}

export default Home;
