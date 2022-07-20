import { Text, View } from 'react-native';
import React, { useRef } from 'react';
import { Video } from 'expo-av';

type Props = {
  videoURL: string;
  thumbnailURL: string;
};

const VideoPlayer = ({ videoURL, thumbnailURL }: Props) => {
  const videoRef = useRef<Video>(null);

  return (
    <View>
      <Video
        source={{
          uri: videoURL,
        }}
        style={{ width: '100%', aspectRatio: 16 / 9 }}
        posterSource={{ uri: thumbnailURL }}
        posterStyle={{
          resizeMode: 'cover',
        }}
        usePoster={true}
        useNativeControls
        resizeMode='contain'
      />
    </View>
  );
};

export default VideoPlayer;
