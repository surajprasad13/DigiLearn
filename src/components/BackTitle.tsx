import {View, Text, StyleSheet, ViewStyle, Pressable} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {fonts} from '../theme';
import Icons from '../theme/icons';
import {useNavigation} from '@react-navigation/native';

type BackTitleProp = PropsWithChildren<{
  title: string;
  containerStyle?: ViewStyle;
}>;

const BackTitle = ({
  title,
  containerStyle,
}: BackTitleProp): React.JSX.Element => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        if (navigation.canGoBack()) {
          navigation.goBack();
        }
      }}
      style={[
        containerStyle,
        {flexDirection: 'row', alignItems: 'center', gap: 2},
      ]}>
      <Icons.Feather name="arrow-left" size={20} />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: fonts.fontSize.base,
    fontFamily: fonts.fontFamily.medium,
  },
});

export default BackTitle;
