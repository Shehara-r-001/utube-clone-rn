import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text_white: {
    color: 'white',
  },
  text_grey: {
    color: '#a6a6a6',
  },
  container: {
    paddingHorizontal: 5,
  },
  videoBox: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  tagsCont: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    marginTop: 10,
    justifyContent: 'center',
  },
});

export default styles;
