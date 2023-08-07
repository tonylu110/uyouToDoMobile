import React from 'react';
import {View, Text, StatusBar, useColorScheme} from 'react-native';
import style from './style';
import {CaretLeft, PlusCircle} from 'phosphor-react-native';

interface TabProps {
  title?: string;
  leftIcon?: JSX.Element;
  rightButtonShow?: boolean;
  leftButtonShow?: boolean;
}

function TabBar(props: TabProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <View style={{height: StatusBar.currentHeight}} />
      <View style={style.tabBar}>
        <View style={style.titleTop}>
          {props.leftButtonShow ? (
            <View
              style={[
                style.button,
                {backgroundColor: isDarkMode ? '#333' : '#ddd'},
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
          ) : null}
        </View>
        <View style={style.titleBottom}>
          <Text style={[style.title, {color: isDarkMode ? '#aaa' : '#555'}]}>
            {props.title ? props.title : 'title'}
          </Text>
          {props.rightButtonShow ? (
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
          ) : null}
        </View>
      </View>
    </>
  );
}

export default TabBar;
