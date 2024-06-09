import React from 'react';
import {View, Dimensions, StyleSheet, Text, Image} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {appStyles, colors, fonts} from '../../../theme';

const {width: screenWidth} = Dimensions.get('window');

const InProgress = () => {
  return (
    <View style={[styles.card]}>
      <Image
        source={{
          uri: 'https://picsum.photos/200/300',
        }}
        style={{
          width: 100,
          height: 130,
          borderRadius: 8,
        }}
        resizeMode="cover"
      />
      <View style={{}}>
        <Text
          style={{
            fontSize: 22,
            width: 180,
            fontFamily: fonts.fontFamily.semibold,
            color: colors.titleText,
          }}>
          Digital shopper journey
        </Text>
        <Text
          style={{
            color: colors.darkBlue,
            fontSize: 12,
            fontFamily: fonts.fontFamily.semibold,
            marginTop: 20,
          }}>
          4 Learnning hours left
        </Text>
        <ProgressBar
          progress={0.4}
          color={colors.darkBlue}
          style={{
            height: 7,
            borderRadius: 10,
            width: 'auto',
            backgroundColor: '#DADADA',
            marginTop: 20,
          }}
        />
        <Text
          style={{
            fontFamily: fonts.fontFamily.regular,
            color: '#1E1E2D',
            margin: 5,
          }}>
          80%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    maxWidth: screenWidth * 0.8,
    padding: 10,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    borderRadius: 8,
    ...appStyles.shadow,
    flexDirection: 'row',
    width: 'auto',
    gap: 15,
  },
});

export default InProgress;
