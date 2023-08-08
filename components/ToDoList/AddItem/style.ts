import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  addItem: {
    width: '90%',
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
  },
  input: {
    fontSize: 20,
  },
  okButton: {
    backgroundColor: '#5985eb',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginRight: 5,
  },
  cancelButton: {
    backgroundColor: '#e5544b',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  buttons: {
    width: '90%',
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default style;
