import { View, Text } from 'react-native';
import React from 'react';
import Comment from '../Comment/Comment';
import comments from '../../assets/data/comments.json';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';

const Comments = () => {
  return (
    <View>
      {comments.map((comment) => (
        <View key={comment.id}>
          <Comment comment={comment} />
        </View>
      ))}
    </View>
  );
};

export default Comments;
