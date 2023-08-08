import React, {useState} from 'react';
import {Text, View, useColorScheme, TouchableOpacity} from 'react-native';
import style from './style';
import ToDo from '../../../type/ToDo';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import getTime from '../../../utils/getTime';
import {Menu} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';

interface ItemProps {
  item: ToDo;
  onSetOk: (id: number, isOk: boolean) => void;
  remove: (id: number) => void;
}

function ToDoItem(props: ItemProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [ok, setOk] = useState(props.item.ok);

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <TouchableOpacity onLongPress={openMenu} delayLongPress={300}>
      <View
        style={[
          style.ListItem,
          {backgroundColor: isDarkMode ? '#333' : '#ddd'},
        ]}>
        <View style={style.checkBox}>
          <BouncyCheckbox
            isChecked={ok}
            unfillColor={isDarkMode ? '#777777' : '#ffffff'}
            fillColor={isDarkMode ? '#4e6fbb' : '#5985eb'}
            onPress={isChecked => {
              props.onSetOk(props.item.id, isChecked);
              setOk(isChecked);
            }}
          />
        </View>
        <View style={style.textArea}>
          <View>
            <Text
              style={
                ok
                  ? [style.textOk, {color: isDarkMode ? '#666' : '#aaa'}]
                  : style.text
              }>
              {props.item.text}
            </Text>
          </View>
          <Text style={[style.time, {color: isDarkMode ? '#666' : '#aaa'}]}>
            {getTime(props.item.id)}
          </Text>
        </View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Text style={{opacity: 0}}>1</Text>}>
          <Menu.Item
            onPress={() => Clipboard.setString(props.item.text)}
            title="复制"
          />
          <Menu.Item onPress={() => props.remove(props.item.id)} title="删除" />
        </Menu>
      </View>
    </TouchableOpacity>
  );
}

export default ToDoItem;
