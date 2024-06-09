import React, {PropsWithChildren} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import {appStyles, colors, fonts, Icon} from '../../../theme';

type UpComingProp = PropsWithChildren<{
  locked?: boolean;
}>;

const UpComing = ({locked}: UpComingProp): React.JSX.Element => {
  return (
    <View style={[styles.card, {opacity: locked ? 0.5 : 1}]}>
      <Image
        source={{
          uri: 'https://source.unsplash.com/400x400?courses',
        }}
        style={{
          width: 73,
          height: 68,
          borderRadius: 8,
        }}
        resizeMode="cover"
      />
      <View style={{}}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: fonts.fontFamily.semibold,
            color: colors.titleText,
          }}>
          Digital shopper journey
        </Text>

        {locked ? (
          <View style={{flexDirection: 'row', marginTop: 12}}>
            <View
              style={{
                padding: 6,
                paddingHorizontal: 12,
                backgroundColor: '#DADADA',
                borderRadius: 6,
                gap: 4,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon.Fontisto name="locked" color="#5B5757" />
              <Text
                style={{
                  fontFamily: fonts.fontFamily.regular,
                  color: '#5B5757',
                }}>
                Locked
              </Text>
            </View>
          </View>
        ) : (
          <View>
            <Text
              style={{
                color: colors.darkBlue,
                fontSize: 16,
                marginTop: 6,
                fontFamily: fonts.fontFamily.semibold,
              }}>
              4 Learnning hours left
            </Text>

            <View>
              <ProgressBar
                progress={0.5}
                color={colors.darkBlue}
                style={{
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: '#DADADA',
                  marginTop: 16,
                  width: 'auto',
                }}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 8,
    ...appStyles.shadow,
    gap: 16,
    flexDirection: 'row',
  },
});

export default UpComing;
