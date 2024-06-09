import React from 'react';
import {View, Dimensions, StyleSheet, Text, Image} from 'react-native';

import {appStyles, fonts, Icon} from '../../../theme';

const {width: screenWidth} = Dimensions.get('window');

const Completed = () => {
  return (
    <View style={[styles.card]}>
      <Image
        source={{
          uri: 'https://source.unsplash.com/400x400?courses',
        }}
        style={{
          width: 58,
          height: 56,
          borderRadius: 8,
        }}
        resizeMode="cover"
      />
      <View style={{}}>
        <Text
          style={{
            fontSize: 16,
            width: 180,
            fontFamily: fonts.fontFamily.semibold,
          }}>
          Digital shopper journey
        </Text>
        <Text
          style={{
            color: '#13B87E',
            fontSize: 12,
            marginTop: 10,
            fontFamily: fonts.fontFamily.semibold,
          }}>
          4 hours Completed{'   '}
          <Icon.Octicons name="check-circle-fill" color="#13B87E" />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: screenWidth * 0.8,
    padding: 10,
    backgroundColor: '#F3F8F5',
    borderRadius: 8,
    ...appStyles.shadow,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
});

export default Completed;
