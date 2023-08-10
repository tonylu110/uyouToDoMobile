import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    width: '90%',
    padding: 15,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftArea: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default style;
