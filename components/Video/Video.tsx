import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  video: {
    id: string;
    createdAt: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    duration: number;
    user: {
      name: string;
      image?: string;
    };
    views: number;
    tags?: string;
    likes?: number;
    dislikes?: number;
  };
};

const Video = ({ video }: Props) => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate('VideoScreen');
  };

  return (
    <Pressable onPress={onPressHandler} style={styles.video_container}>
      <View style={{ position: 'relative' }}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: video.thumbnail,
          }}
        />
        <Text style={styles.time}>
          {Math.floor(video.duration / 60)}:
          {video.duration % 60 < 10
            ? '0' + (video.duration % 60)
            : video.duration % 60}
        </Text>
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
            uri: video.user.image,
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
          <Text style={[styles.text_white, { fontSize: 16, marginBottom: 2 }]}>
            {video.title}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Text style={styles.text_grey}>{video.user.name} </Text>
            <Text style={styles.text_grey}>{'\u00B7'} </Text>
            <Text style={styles.text_grey}>
              {video.views < 999000
                ? video.views / 1000 + 'K'
                : video.views < 1000
                ? video.views
                : video.views / 1000000 + 'M'}{' '}
              views{' '}
            </Text>
            <Text style={styles.text_grey}>{'\u00B7'} </Text>
            <Text style={styles.text_grey}>{video.createdAt}</Text>
          </View>
        </View>
        <View style={{ display: 'flex', justifyContent: 'center' }}>
          <Entypo name='dots-three-vertical' size={18} color='white' />
        </View>
      </View>
    </Pressable>
  );
};

export default Video;
