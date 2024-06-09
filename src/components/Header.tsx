import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import {colors, fonts} from '../theme';

const Header = () => {
  return (
    <View style={styles.container}>
      <Feather name="menu" size={20} color="white" />
      <View style={{flex: 1}}>
        <Text style={styles.title}>Learning Hub</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Octicons name="bell" color="white" size={20} />
        <FontAwesome name="user-circle-o" color="white" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.lightBlack,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.fontFamily.bold,
    fontSize: 16,
  },
});

export default Header;
