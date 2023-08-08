import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import ToDoItem from './ToDoItem';
import style from './style';
import ToDo from '../../type/ToDo';
import setToDoData from '../../utils/setToDoData';
import AddItem from './AddItem';

interface ToDoListProps {
  list: ToDo[];
  showAdd: boolean;
}

function ToDoList(props: ToDoListProps): JSX.Element {
  const [list, setList] = useState<ToDo[]>([]);

  useEffect(() => {
    setList(props.list);
  }, [props.list]);

  const changeToDo = (
    id: number,
    isOk: boolean,
    text: string,
    changName: string,
  ) => {
    if (changName === 'setOk') {
      list.forEach(item => {
        if (item.id === id) {
          item.ok = isOk;
        }
      });
    } else if (changName === 'add') {
      list.unshift({
        id,
        text,
        ok: isOk,
      });
      setShowAdd(false);
    } else if (changName === 'remove') {
      list.forEach((item, index) => {
        if (item.id === id) {
          list.splice(index, 1);
        }
      });
    }
    setList(list);
    setToDoData(list);
  };

  const [showAdd, setShowAdd] = useState(false);
  useEffect(() => {
    setShowAdd(props.showAdd);
  }, [props.showAdd]);

  return (
    <View style={style.List}>
      {showAdd ? (
        <AddItem
          addToDo={text => changeToDo(new Date().getTime(), false, text, 'add')}
          showAdd={() => setShowAdd(false)}
        />
      ) : null}
      {list.map(item => (
        <ToDoItem
          item={{
            id: item.id,
            text: item.text,
            ok: item.ok,
          }}
          onSetOk={(id, isOk) => changeToDo(id, isOk, '', 'setOk')}
          remove={id => changeToDo(id, false, '', 'remove')}
          key={item.id}
        />
      ))}
    </View>
  );
}

export default ToDoList;
