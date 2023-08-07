import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  tabBar: {
    flexDirection: 'column',
    height: 112,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  titleTop: {
    flexDirection: 'row',
    width: '90%',
  },
  titleBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
  },
  button: {
    borderRadius: 8,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
});

export default style;
