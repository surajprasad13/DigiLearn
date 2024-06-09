import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#38476D',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 2,
  },
});
