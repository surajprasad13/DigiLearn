import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {fonts} from '../theme';
import Icons from '../theme/icons';

type BackTitleProp = PropsWithChildren<{
  title: string;
  containerStyle?: ViewStyle;
}>;

const BackTitle = ({
  title,
  containerStyle,
}: BackTitleProp): React.JSX.Element => {
  return (
    <View
      style={[
        containerStyle,
        {flexDirection: 'row', alignItems: 'center', gap: 2},
      ]}>
      <Icons.Feather name="arrow-left" size={20} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: fonts.fontSize.base,
    fontFamily: fonts.fontFamily.medium,
  },
});

export default BackTitle;
