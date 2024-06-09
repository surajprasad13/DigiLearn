import {Animated, View, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, fonts, Icon} from '../theme';
import {Divider} from 'react-native-paper';

function Toptabbar({state, descriptors, navigation, position}: any) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_: any, i: number) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i: number) => (i === index ? 1 : 0)),
        });

        function renderIcon(route: string) {
          switch (route) {
            case 'Queries':
              return (
                <Icon.Feather
                  name="message-circle"
                  size={20}
                  color={isFocused ? colors.titleText : '#9C9898'}
                />
              );

            case 'Notes':
              return (
                <Icon.Feather
                  name="list"
                  size={20}
                  color={isFocused ? colors.titleText : '#9C9898'}
                />
              );

            default:
              return;
          }
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            style={{flex: 1}}>
            <View style={styles.tab}>
              {renderIcon(label)}
              <Animated.Text
                style={[
                  styles.title,
                  {
                    color: isFocused ? colors.titleText : '#9C9898',
                  },
                ]}>
                {label}
              </Animated.Text>
            </View>
            <Divider
              style={{
                height: 4,
                marginTop: 10,
                backgroundColor: isFocused ? colors.darkBlue : 'transparent',
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    marginHorizontal: 20,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontFamily: fonts.fontFamily.medium,
    fontSize: 14,
  },
});

export default Toptabbar;
