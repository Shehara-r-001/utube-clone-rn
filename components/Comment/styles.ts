import { StyleSheet } from 'react-native';
import { FlipInEasyX } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,

    borderTopWidth: 1,
    borderColor: '#333333',
    paddingHorizontal: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  text_white: {
    color: 'white',
  },
  text_grey: {
    color: '#a6a6a6',
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 50,
  },
  nameCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  comment: {
    marginLeft: 10,
    marginVertical: 5,
  },
  iconsCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    width: '50%',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  likeCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
