import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text_white: {
    color: 'white',
  },
  text_grey: {
    color: '#a6a6a6',
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    marginVertical: 3,
  },
  btn: {
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 6,
    borderRadius: 20,
    fontSize: 14,
  },
  top: {
    color: 'black',
    backgroundColor: 'white',
  },
  sortCont: {
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  guidline: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderTopWidth: 1,
    borderColor: '#333333',
  },
  input: {
    padding: 5,
    color: 'white',
    flex: 1,
    marginLeft: 5,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
});

export default styles;
