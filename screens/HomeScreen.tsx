import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.video_container}>
        <View style={{ position: 'relative' }}>
          <Image
            style={styles.thumbnail}
            source={{
              uri: 'https://i.ytimg.com/vi/kKb9SY7x9Dk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-bPcc0zllt_IJqoRpdWj57dYlRw',
            }}
          />
          <Text style={styles.time}>2:05</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: 5,
            marginVertical: 10,
          }}
        >
          <Image
            style={styles.userImg}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/84827162?v=4',
            }}
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginLeft: 10,
              flex: 1,
            }}
          >
            <Text
              style={[styles.text_white, { fontSize: 16, marginBottom: 2 }]}
            >
              Luffy vs Kaido Epic Fight | One Piece
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Text style={styles.text_grey}>Strider </Text>
              <Text style={styles.text_grey}>{'\u00B7'} </Text>
              <Text style={styles.text_grey}>1.7M Views </Text>
              <Text style={styles.text_grey}>{'\u00B7'} </Text>
              <Text style={styles.text_grey}>1 month ago</Text>
            </View>
          </View>
          <View style={{ display: 'flex', justifyContent: 'center' }}>
            <Entypo name='dots-three-vertical' size={18} color='white' />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  video_container: {
    paddingHorizontal: 5,
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

export default HomeScreen;
