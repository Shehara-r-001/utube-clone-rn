import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Iconbar = () => {
  return (
    <ScrollView style={styles.container} horizontal>
      <View style={styles.icon_cont}>
        <View style={styles.icon_view}>
          <AntDesign style={styles.icon} name='like2' size={24} color='white' />
          <Text style={styles.icon_text}>Like</Text>
        </View>
        <View style={styles.icon_view}>
          <AntDesign
            style={styles.icon}
            name='dislike2'
            size={24}
            color='white'
          />
          <Text style={styles.icon_text}>Dislike</Text>
        </View>
        <View style={styles.icon_view}>
          <Ionicons
            style={styles.icon}
            name='md-chatbubbles-outline'
            size={24}
            color='white'
          />
          <Text style={styles.icon_text}>Comment</Text>
        </View>
        <View style={styles.icon_view}>
          <MaterialCommunityIcons
            style={styles.icon}
            name='share-outline'
            size={28}
            color='white'
          />
          <Text style={styles.icon_text}>Share</Text>
        </View>
        <View style={styles.icon_view}>
          <MaterialCommunityIcons
            style={styles.icon}
            name='download-outline'
            size={28}
            color='white'
          />
          <Text style={styles.icon_text}>Download</Text>
        </View>
        <View style={styles.icon_view}>
          <MaterialCommunityIcons
            style={styles.icon}
            name='playlist-plus'
            size={28}
            color='white'
          />
          <Text style={styles.icon_text}>Save</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  icon_cont: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 20,
  },
  icon_text: {
    color: 'white',
    marginVertical: 5,
    fontSize: 12,
  },
  icon_view: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default Iconbar;
