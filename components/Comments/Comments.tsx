import { View, Text, TextInput, Image } from 'react-native';
import React from 'react';
import Comment from '../Comment/Comment';
import comments from '../../assets/data/comments.json';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import styles from './styles';

const Comments = () => {
  return (
    <View>
      <View style={{ paddingTop: 20 }}>
        <Text style={[styles.text_white, styles.title]}>Comments</Text>
        <View style={styles.sortCont}>
          <Text style={[styles.btn, styles.top]}>Top</Text>
          <Text style={[styles.btn]}>Newest</Text>
        </View>
      </View>
      <View style={styles.guidline}>
        <Text style={styles.text_white}>
          Remember to keep comments respectful and to follow our{' '}
          <Text style={{ color: '#0099ff' }}>Community Guidlines</Text>
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 5,
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/84827162?v=4',
          }}
        />
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder='Add a comment...'
          placeholderTextColor={'#cccccc'}
        />
      </View>
      {comments.map((comment) => (
        <View key={comment.id}>
          <Comment comment={comment} />
        </View>
      ))}
    </View>
  );
};

export default Comments;
