import AsyncStorage from '@react-native-async-storage/async-storage';

async function setToDo(data: string) {
  try {
    await AsyncStorage.setItem('todo', data);
  } catch (e) {
    console.error(e);
  }
}

function setupToDo() {
  return AsyncStorage.getItem('todo').then(res => {
    if (!res) {
      const ToDoData = {
        data: [
          {
            text: '欢迎使用 uyou ToDo',
            id: new Date().getTime(),
            ok: false,
          },
          {
            text: '将 ToDo 项往右拖动，完成 ToDo',
            id: new Date().getTime() + 1,
            ok: false,
          },
          {
            text: '将 ToDo 项往左拖动，删除 ToDo',
            id: new Date().getTime() + 3,
            ok: false,
          },
          {
            text: '长按 ToDo 项，即可复制 ToDo 内容',
            id: new Date().getTime() + 4,
            ok: false,
          },
        ],
      };
      setToDo(JSON.stringify(ToDoData));
      return ToDoData.data;
    } else {
      return JSON.parse(res).data;
    }
  });
}

export {setupToDo, setToDo};
