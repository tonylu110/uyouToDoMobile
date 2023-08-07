import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  tabBar: {
    flexDirection: 'column',
    height: 112,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
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
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
