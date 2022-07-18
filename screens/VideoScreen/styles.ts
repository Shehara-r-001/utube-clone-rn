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
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    borderTopColor: '#333333',
    borderTopWidth: 1,
    borderBottomColor: '#333333',
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  userImg: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginLeft: 5,
  },
  userName: {
    fontSize: 18,
    color: 'white',
  },
  subscribe: {
    color: 'red',
    fontSize: 20,
    textTransform: 'uppercase',
    marginRight: 5,
  },
  commentBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  comment: {
    color: '#e6e6e6',
    marginLeft: 10,
    fontSize: 12,
  },
  commentCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    marginRight: 5,
  },
});

export default styles;
