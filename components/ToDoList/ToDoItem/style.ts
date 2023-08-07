import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  ListItem: {
    backgroundColor: '#ddd',
    width: '90%',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    marginRight: 0,
  },
  text: {
    fontSize: 20,
  },
  textOk: {
    fontSize: 20,
    textDecorationLine: 'line-through',
  },
});

export default style;
