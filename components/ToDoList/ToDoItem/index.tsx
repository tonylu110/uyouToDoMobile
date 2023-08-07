import React, {useState} from 'react';
import {Text, View, useColorScheme} from 'react-native';
import style from './style';
import ToDo from '../../../type/ToDo';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import getTime from '../../../utils/getTime';

interface ItemProps {
  item: ToDo;
  onSetOk: (id: number, isOk: boolean) => void;
}

function ToDoItem(props: ItemProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [ok, setOk] = useState(props.item.ok);

  return (
    <View
      style={[style.ListItem, {backgroundColor: isDarkMode ? '#333' : '#ddd'}]}>
      <View style={style.checkBox}>
        <BouncyCheckbox
          isChecked={ok}
          unfillColor="#FFFFFF"
          fillColor="#5985eb"
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
    </View>
  );
}

export default ToDoItem;
