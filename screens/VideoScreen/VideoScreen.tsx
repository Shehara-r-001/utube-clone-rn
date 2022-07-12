import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import video from '../../assets/data/video.json';
import { Feather } from '@expo/vector-icons';

const VideoScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.videoBox} source={{ uri: video.thumbnail }} />
        <View style={styles.tagsCont}>
          <Text style={{ color: '#0066ff', flex: 1 }}>{video.tags}</Text>

          <Feather name='chevron-down' size={18} color='white' />
        </View>
        <View>
          <Text
            style={[
              styles.text_white,
              { fontSize: 16, marginBottom: 2, paddingHorizontal: 5 },
            ]}
          >
            {video.title}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 3,
              paddingHorizontal: 5,
            }}
          >
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
      </View>
    </SafeAreaView>
  );
};

export default VideoScreen;
