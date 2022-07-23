import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

const logo = require('../../assets/images/logo.png');

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image resizeMode='contain' style={styles.logo} source={logo} />
        <View style={styles.iconCont}>
          <FontAwesome5 name='chromecast' size={24} color='white' />
          <View style={{ position: 'relative' }}>
            <FontAwesome name='bell-o' size={24} color='white' />
            <Text style={styles.notification}>7</Text>
          </View>
          <FontAwesome name='search' size={24} color='white' />
          <FontAwesome name='user' size={24} color='white' />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
