import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';

import {appStyles, fonts, Icon} from '../../../theme';
import {useNavigation} from '@react-navigation/native';

const {width: screenWidth} = Dimensions.get('window');

const Completed = (): React.JSX.Element => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.card]}
      onPress={() => {
        navigation.navigate('CourseDetail');
      }}>
      <Image
        source={{
          uri: 'https://picsum.photos/200/300',
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
    </Pressable>
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
