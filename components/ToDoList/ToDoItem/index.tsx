import React, {useState} from 'react';
import {Text, View} from 'react-native';
import style from './style';
import ToDo from '../../../type/ToDo';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import getTime from '../../../utils/getTime';

interface ItemProps {
  item: ToDo;
  onSetOk: (id: number, isOk: boolean) => void;
}

function ToDoItem(props: ItemProps): JSX.Element {
  const [ok, setOk] = useState(props.item.ok);

  return (
    <View style={style.ListItem}>
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
          <Text style={ok ? style.textOk : style.text}>{props.item.text}</Text>
        </View>
        <Text style={style.time}>{getTime(props.item.id)}</Text>
      </View>
    </View>
  );
}

export default ToDoItem;
