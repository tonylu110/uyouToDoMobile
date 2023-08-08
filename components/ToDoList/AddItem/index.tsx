import {TextInput, TouchableOpacity, useColorScheme, View} from 'react-native';
import style from './style';
import {useState} from 'react';
import {Check, X} from 'phosphor-react-native';

interface AddItemProps {
  showAdd: () => void;
  addToDo: (text: string) => void;
}

function AddItem(props: AddItemProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [text, setText] = useState('');

  return (
    <>
      <View
        style={[
          style.addItem,
          {backgroundColor: isDarkMode ? '#333' : '#ddd'},
        ]}>
        <TextInput style={style.input} onChangeText={setText} value={text} />
      </View>
      <View style={style.buttons}>
        {text.length !== 0 ? (
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => props.addToDo(text)}>
            <View style={style.okButton}>
              <Check weight={'bold'} color={'white'} />
            </View>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity style={{flex: 1}} onPress={() => props.showAdd()}>
          <View
            style={[
              style.cancelButton,
              {marginLeft: text.length !== 0 ? 5 : 0},
            ]}>
            <X weight={'bold'} color={'white'} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default AddItem;
