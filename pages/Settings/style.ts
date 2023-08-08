import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  list: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
  },
  background: {
    height: '100%',
  },
  logo: {
    width: '90%',
    height: 200,
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  logoImg: {
    height: 110,
    width: 110,
  },
  logoText: {
    fontSize: 22,
  },
});

export default style;
