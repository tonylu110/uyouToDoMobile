import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

function TabBar(): JSX.Element {
  return (
    <View style={style.tabBar}>
      <Text style={style.title}>Title</Text>
    </View>
  );
}

export default TabBar;
