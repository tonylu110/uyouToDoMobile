import React from 'react';
import {
  View,
  Text,
  StatusBar,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import {CaretLeft, House, PlusCircle} from 'phosphor-react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface TabProps {
  title?: string;
  leftIcon?: JSX.Element;
  rightButtonShow?: boolean;
  leftButtonShow?: boolean;
  leftButtonFn?: () => void;
  showHome?: boolean;
  navigation: NativeStackScreenProps<any>['navigation'];
  showAdd?: () => void;
}

function TabBar(props: TabProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <View style={{height: StatusBar.currentHeight}} />
      <View style={style.tabBar}>
        <View style={style.titleTop}>
          {props.leftButtonShow ? (
            <TouchableOpacity
              onPress={() => {
                if (props.leftButtonFn) {
                  props.leftButtonFn();
                } else {
                  props.navigation.goBack();
                }
              }}>
              <View
                style={[
                  style.button,
                  {
                    backgroundColor: isDarkMode ? '#333' : '#ddd',
                    marginRight: 10,
                  },
                ]}>
                {props.leftIcon ? (
                  props.leftIcon
                ) : (
                  <CaretLeft
                    weight={'bold'}
                    color={isDarkMode ? '#aaa' : '#555'}
                  />
                )}
              </View>
            </TouchableOpacity>
          ) : null}
          {props.showHome ? (
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
              <View
                style={[
                  style.button,
                  {backgroundColor: isDarkMode ? '#333' : '#ddd'},
                ]}>
                <House weight={'bold'} color={isDarkMode ? '#aaa' : '#555'} />
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={style.titleBottom}>
          <Text style={[style.title, {color: isDarkMode ? '#aaa' : '#555'}]}>
            {props.title ? props.title : 'title'}
          </Text>
          {props.rightButtonShow ? (
            <TouchableOpacity onPress={() => props.showAdd!()}>
              <View
                style={[
                  style.button,
                  {backgroundColor: isDarkMode ? '#333' : '#ddd'},
                ]}>
                <PlusCircle
                  weight={'bold'}
                  color={isDarkMode ? '#aaa' : '#555'}
                />
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </>
  );
}

export default TabBar;
