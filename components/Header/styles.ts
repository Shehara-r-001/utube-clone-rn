import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingTop: 0,
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  logo: {
    height: 50,
    width: 100,
  },
  iconCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-around',
  },
  notification: {
    color: 'white',
    position: 'absolute',
    left: 10,
    top: -2,
    backgroundColor: '#ff0000',
    height: 18,
    width: 14,
    borderRadius: 50,
    textAlign: 'center',
  },
});

export default styles;
