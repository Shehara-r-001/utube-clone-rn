import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Video from '../components/Video/Video';
import videos from '../assets/data/videos.json';

const HomeScreen = () => {
  return (
    <ScrollView>
      {videos.map((video) => (
        <View key={video.id}>
          <Video video={video} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
