import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

type Props = {
  comment: {
    id: string;
    createdAt: string;
    comment: string;
    user: {
      name: string;
      image: string;
    };
    likes: number;
    dislikes: number;
    replies: number;
  };
};

const Comment = ({ comment }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: comment.user.image }} />
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.nameCont}>
          <Text style={[styles.text_grey, { fontSize: 12 }]}>
            {comment.user.name} {'\u00B7'}{' '}
          </Text>
          <Text style={[styles.text_grey, { fontSize: 12 }]}>
            {comment.createdAt}
          </Text>
        </View>
        <Text style={[styles.text_white, styles.comment]}>
          {comment.comment}
        </Text>
        <View style={styles.iconsCont}>
          <View style={styles.likeCont}>
            <AntDesign name='like2' size={16} color='white' />
            <Text style={[styles.text_white, { marginLeft: 5, fontSize: 12 }]}>
              {comment.likes}
            </Text>
          </View>
          <View style={styles.likeCont}>
            <AntDesign name='dislike2' size={16} color='white' />
            <Text style={[styles.text_white, { marginLeft: 5, fontSize: 12 }]}>
              {comment.dislikes}
            </Text>
          </View>
          <View style={styles.likeCont}>
            <MaterialCommunityIcons
              name='comment-processing-outline'
              size={16}
              color='white'
            />
            <Text style={[styles.text_white, { marginLeft: 5, fontSize: 12 }]}>
              {comment.replies}
            </Text>
          </View>
        </View>
      </View>
      <Entypo name='dots-three-vertical' size={16} color='white' />
    </View>
  );
};

export default Comment;
