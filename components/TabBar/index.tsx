import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

interface TabProps {
  title?: string;
}

function TabBar(props: TabProps): JSX.Element {
  return (
    <View style={style.tabBar}>
      <Text style={style.title}>{props.title}</Text>
    </View>
  );
}

export default TabBar;
