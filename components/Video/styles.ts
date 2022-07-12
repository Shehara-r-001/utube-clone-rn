import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  video_container: {
    paddingHorizontal: 5,
    marginBottom: 15,
  },
  userImg: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  time: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: 'white',
    backgroundColor: 'black',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    opacity: 0.7,
  },
  text_white: {
    color: '#e6e6e6',
  },
  text_grey: {
    color: '#a6a6a6',
  },
});

export default styles;
