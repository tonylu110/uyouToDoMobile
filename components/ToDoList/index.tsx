import React from 'react';
import {View} from 'react-native';
import ToDoItem from './ToDoItem';
import style from './style';
import ToDo from '../../type/ToDo';

interface ToDoListProps {
  list: ToDo[];
}

function ToDoList(props: ToDoListProps): JSX.Element {
  const setOk = (id: number, isOk: boolean) => {
    console.log(id + (isOk + ''));
  };

  return (
    <View style={style.List}>
      {props.list.map(item => (
        <ToDoItem
          item={{
            id: item.id,
            text: item.text,
            ok: item.ok,
          }}
          onSetOk={setOk}
          key={item.id}
        />
      ))}
    </View>
  );
}

export default ToDoList;
