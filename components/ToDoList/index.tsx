import React from 'react';
import {View} from 'react-native';
import ToDoItem from './ToDoItem';
import style from './style';

function ToDoList(): JSX.Element {
  const list = new Array(10).fill('').map((_item, index) => {
    return {
      id: new Date().getTime() + index,
      text: '123456789' + index,
      ok: index % 2 === 0,
    };
  });

  const setOk = (id: number, isOk: boolean) => {
    console.log(id + (isOk + ''));
  };

  return (
    <View style={style.List}>
      {list.map(item => (
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
