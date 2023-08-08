import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import ToDoItem from './ToDoItem';
import style from './style';
import ToDo from '../../type/ToDo';
import setToDoData from '../../utils/setToDoData';

interface ToDoListProps {
  list: ToDo[];
}

function ToDoList(props: ToDoListProps): JSX.Element {
  const [list, setList] = useState<ToDo[]>([]);

  useEffect(() => {
    setList(props.list);
  }, [props.list]);

  const setOk = (id: number, isOk: boolean) => {
    list.forEach(item => {
      if (item.id === id) {
        item.ok = isOk;
      }
    });
    setList(list);
    setToDoData(list);
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
