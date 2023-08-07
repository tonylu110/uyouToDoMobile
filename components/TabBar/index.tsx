import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import {CaretLeft, PlusCircle} from 'phosphor-react-native';

interface TabProps {
  title?: string;
  leftIcon?: JSX.Element;
  rightButtonShow?: boolean;
  leftButtonShow?: boolean;
}

function TabBar(props: TabProps): JSX.Element {
  return (
    <View style={style.tabBar}>
      <View style={style.titleTop}>
        {props.leftButtonShow ? (
          <View style={style.button}>
            {props.leftIcon ? (
              props.leftIcon
            ) : (
              <CaretLeft weight={'bold'} color={'#555'} />
            )}
          </View>
        ) : null}
      </View>
      <View style={style.titleBottom}>
        <Text style={style.title}>{props.title ? props.title : 'title'}</Text>
        {props.rightButtonShow ? (
          <View style={style.button}>
            <PlusCircle weight={'bold'} color={'#555'} />
          </View>
        ) : null}
      </View>
    </View>
  );
}

export default TabBar;
