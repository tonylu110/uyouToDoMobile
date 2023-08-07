import React from 'react';
import {View} from 'react-native';
import ToDoItem from './ToDoItem';
import style from './style';

function ToDoList(): JSX.Element {
  const list = new Array(10).fill({
    id: new Date().getTime(),
    text: '123456789',
    ok: false,
  });

  const setOk = (id: number, isOk: boolean) => {
    console.log(id + (isOk + ''));
  };

  return (
    <View style={style.List}>
      {list.map((item, index) => (
        <ToDoItem
          item={{
            id: item.id,
            text: item.text,
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
