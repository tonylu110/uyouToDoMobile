import React from 'react';
import {View} from 'react-native';
import ToDoItem from './ToDoItem';
import style from './style';

function ToDoList(): JSX.Element {
  const list = new Array(10).fill('123456789');

  const setOk = (id: number, isOk: boolean) => {
    console.log(id + (isOk + ''));
  };

  return (
    <View style={style.List}>
      {list.map((item, index) => (
        <ToDoItem
          item={{
            id: index,
            text: item,
            ok: index % 2 === 0,
          }}
          onSetOk={setOk}
          key={index}
        />
      ))}
    </View>
  );
}

export default ToDoList;
