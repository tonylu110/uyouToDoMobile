import ToDo from '../type/ToDo';
import {setToDo} from './setupToDo';

function setToDoData(todo: ToDo[]) {
  const data = JSON.stringify({
    data: todo,
  });
  setToDo(data);
}

export default setToDoData;
