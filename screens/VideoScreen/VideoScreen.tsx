import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import video from '../../assets/data/video.json';
import { Feather } from '@expo/vector-icons';
import Iconbar from '../../components/Iconbar';
import { Ionicons } from '@expo/vector-icons';
import videos from '../../assets/data/videos.json';
import Video from '../../components/Video/Video';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const VideoScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <VideoPlayer
            videoURL={video.videoUrl}
            thumbnailURL={video.thumbnail}
          />
          {/* <Image style={styles.videoBox} source={{ uri: video.thumbnail }} /> */}
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
          <Iconbar />
          <View style={styles.profile}>
            <Image style={styles.userImg} source={{ uri: video.user.image }} />
            <View style={{ marginLeft: 10, flex: 1 }}>
              <Text style={[styles.userName]}>{video.user.name}</Text>
              <Text style={[styles.text_grey, { fontSize: 14, marginTop: 2 }]}>
                11.1K Subscribers
              </Text>
            </View>
            <Text style={styles.subscribe}>SUBSCRIBE</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 5,
              borderBottomColor: '#333333',
              marginBottom: 10,
            }}
          >
            <View style={styles.commentBox}>
              <Text style={{ color: 'white', flex: 1 }}>
                Comments <Text style={styles.text_grey}>404</Text>
              </Text>
              <View>
                <Ionicons name='chevron-up-outline' size={12} color='white' />
                <Ionicons name='chevron-down' size={12} color='white' />
              </View>
            </View>
            <View style={styles.commentCont}>
              <Image
                style={[
                  styles.userImg,
                  { height: 25, width: 25, marginVertical: 5 },
                ]}
                source={{ uri: video.user.image }}
              />
              <Text style={styles.comment}>This is a comment</Text>
            </View>
          </View>
          <View>
            {videos.map((video) => (
              <View key={video.id}>
                <Video video={video} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoScreen;
